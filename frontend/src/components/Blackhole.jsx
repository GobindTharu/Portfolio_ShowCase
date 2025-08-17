// Blackhole.jsx
import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useContext,
  createContext,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";

/** Scene context to share time across windows */
const SceneContext = createContext(null);
function useSceneState() {
  const start = useRef(performance.now());
  const time = () => (performance.now() - start.current) / 1000;
  return { time };
}

/** Vertex shader */
const vert = `
precision highp float;
attribute vec3 position;
void main() {
  gl_Position = vec4(position, 1.0);
}
`;

/** Fragment shader — smoke-like red/green blackhole fragmanets */
const frag = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;

#define PI 3.14159265359
float hash(vec2 p){ return fract(sin(dot(p,vec2(41.0,289.0)))*43758.5453);}
float noise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f*f*f*(f*(f*6.0-15.0)+10.0);
  float a=hash(i), b=hash(i+vec2(1.,0.)), c=hash(i+vec2(0.,1.)), d=hash(i+vec2(1.,1.));
  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
}
float fbm(vec2 p){ float v=0.0,a=0.5; for(int i=0;i<6;i++){v+=a*noise(p); p*=2.; a*=0.5;} return v;}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy - 0.5;
  uv.x *= u_res.x/u_res.y;

  // attract to mouse
  vec2 dir = u_mouse - uv;
  uv += dir*0.1;

  float t = u_time*0.5;
  float r = length(uv);
  float a = atan(uv.y, uv.x);
  float swirl = sin(a*4.0 - t*2.0) * cos(r*8.0 - t*3.0);
  float green = exp(-6.0*r*r)*(0.6 + 0.4*sin(swirl*2.0 + t*3.0));
  float red   = exp(-6.0*r*r)*(0.6 + 0.4*cos(swirl*3.0 - t*2.0));
  vec3 col = vec3(red, green, 0.0);
  float glow = exp(-8.0*r*r);
  col += vec3(0.2,0.4,0.3)*glow;
  gl_FragColor = vec4(col,1.0);
}
`;

/** Shader mesh */
function SmokeBall({ width, height, timeFn, mouse }) {
  const mat = useRef();
  const uniforms = useMemo(
    () => ({
      u_res: { value: new THREE.Vector2(width, height) },
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2(mouse.x, mouse.y) },
    }),
    [width, height, mouse]
  );

  useFrame(() => {
    uniforms.u_time.value = timeFn();
    uniforms.u_res.value.set(width, height);
    uniforms.u_mouse.value.set(mouse.x, mouse.y);
  });

  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const verts = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]);
    g.setAttribute("position", new THREE.BufferAttribute(verts, 3));
    return g;
  }, []);

  return (
    <mesh geometry={geom} frustumCulled={false}>
      <shaderMaterial
        ref={mat}
        args={[{ vertexShader: vert, fragmentShader: frag, uniforms }]}
      />
    </mesh>
  );
}

/** Canvas wrapper */
function SmokeCanvas({ width, height, timeFn, mouse }) {
  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 1], zoom: 1 }}
      className="w-full h-full"
    >
      <SmokeBall width={width} height={height} timeFn={timeFn} mouse={mouse} />
    </Canvas>
  );
}

/** Toolbar */
function Toolbar({ onNewWindow }) {
  return (
    <div className="flex items-center justify-between gap-2 px-3 py-2 bg-black/60 backdrop-blur rounded-xl border border-white/10">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <p className="ml-3 text-sm text-white/70">Multiple Smoke Blackholes</p>
      </div>
      <button
        onClick={onNewWindow}
        className="text-xs px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white"
      >
        New Window
      </button>
    </div>
  );
}

/** Floating window */
function FloatingWindow({ id, onClose, timeFn, mouse }) {
  const width = 400;
  const height = 320;
  return (
    <motion.div
      drag
      dragMomentum={false}
      whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.45)" }}
      className="absolute top-10 left-10 w-[88vw] max-w-[560px] h-[320px] md:h-[420px] bg-black/70 rounded-2xl border border-white/10 overflow-hidden"
      style={{ touchAction: "none" }}
    >
      <div className="flex items-center justify-between px-3 py-2 bg-white/5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-xs text-white/70 ml-2">window_{id}</span>
        </div>
        <button
          onClick={onClose}
          className="text-xs px-2 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white"
        >
          Close
        </button>
      </div>
      <div className="w-full h-[calc(100%-40px)]">
        <SmokeCanvas
          width={width}
          height={height}
          timeFn={timeFn}
          mouse={mouse}
        />
      </div>
    </motion.div>
  );
}

/** Main App */
export const Blackhole = () => {
  const scene = useSceneState();
  const [windows, setWindows] = useState([0]);
  const nextId = useRef(1);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: e.clientX / window.innerWidth - 0.5,
        y: -(e.clientY / window.innerHeight - 0.5),
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const addWindow = () => setWindows((w) => [...w, nextId.current++]);
  const removeWindow = (id) => setWindows((w) => w.filter((i) => i !== id));

  return (
    <SceneContext.Provider value={scene}>
      <div className="min-h-screen w-full bg-[#0b0b0f] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 pt-6">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-center md:text-left">
            Smoke-like Blackhole Scene
          </h1>
          <p className="text-white/60 mt-2 text-center md:text-left">
            Drag the windows. Each has its own red/green smoke ball interacting
            with your cursor.
          </p>
          <div className="mt-4">
            <Toolbar onNewWindow={addWindow} />
          </div>
        </div>

        {/* Background blackhole */}
        <div className="absolute inset-0 -z-10">
          <SmokeCanvas
            width={window.innerWidth}
            height={window.innerHeight}
            timeFn={scene.time}
            mouse={mouse}
          />
        </div>

        {/* Floating windows */}
        {windows.map((id) => (
          <FloatingWindow
            key={id}
            id={id}
            onClose={() => removeWindow(id)}
            timeFn={scene.time}
            mouse={mouse}
          />
        ))}

        <footer className="absolute bottom-3 inset-x-0 text-center text-[11px] text-white/50">
          Built with React + @react-three/fiber + Tailwind
        </footer>
      </div>
    </SceneContext.Provider>
  );
};
