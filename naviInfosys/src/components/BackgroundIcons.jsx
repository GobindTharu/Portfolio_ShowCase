import { motion } from "framer-motion";
import { FaReact, FaWordpress, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobeaudition,
} from "react-icons/si";

const FloatingIcon = ({ icon: Icon, delay, duration, x, y }) => (
  <motion.div
    className="absolute text-4xl text-primary/30"
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0.3, 0.8, 0.3],
      x: [x, x + 50, x],
      y: [y, y - 50, y],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    <Icon />
  </motion.div>
);

const BackgroundIcons = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <FloatingIcon icon={FaReact} delay={0} duration={6} x={100} y={100} />
      <FloatingIcon icon={SiNextdotjs} delay={1} duration={7} x={300} y={200} />
      <FloatingIcon icon={FaWordpress} delay={2} duration={8} x={500} y={150} />
      <FloatingIcon icon={FaNodeJs} delay={1.5} duration={6} x={700} y={300} />
      <FloatingIcon
        icon={SiFirebase}
        delay={2.5}
        duration={7}
        x={200}
        y={400}
      />
      <FloatingIcon
        icon={SiAdobeaftereffects}
        delay={3}
        duration={8}
        x={400}
        y={500}
      />
      <FloatingIcon
        icon={SiPostgresql}
        delay={3.5}
        duration={6}
        x={600}
        y={450}
      />
      <FloatingIcon
        icon={SiAdobephotoshop}
        delay={4}
        duration={7}
        x={800}
        y={200}
      />
    </div>
  );
};

export default BackgroundIcons;
