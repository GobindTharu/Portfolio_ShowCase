import axios from "axios";
import { motion, progress } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
import { useInView } from "react-intersection-observer";

const categories = [
  "software development",
  "web development",
  "mobile apps",
  "cloud computing",
  "devops",
  "cybersecurity",
  "machine learning",
  "data science",
  "ui/ux design",
  "testing & qa",
  "product management",
  "company culture",
  "tutorials",
  "technology trends",
  "case studies",
];

export const BlogPostForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [image, setImage] = useState(null);

  const [form, setForm] = useState({
    title: "",
    content: "",
    thumbnailImage: null,
    category: "",
    metaTitle: "",
    metaDescription: "",
    keywords: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const uploadImageToCloudinary = async () => {
    if (!image) return null;

    const cloudinaryUrl = import.meta.env.VITE_CLOUD_URL;
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "images_preset");

    try {
      const res = await axios.post(cloudinaryUrl, data);
      return res.data.secure_url;
    } catch (error) {
      toast.error("Image upload failed");
      console.error(error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    const uploadedImageUrl = await uploadImageToCloudinary();

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("content", form.content);
      formData.append("category", form.category);

      if (uploadedImageUrl) {
        formData.append("thumbnailImage", uploadedImageUrl);
      }

      const seoObject = {
        metaTitle: form.metaTitle,
        metaDescription: form.metaDescription,
        keywords: form.keywords
          .split(",")
          .map((k) => k.trim().toLowerCase())
          .filter(Boolean),
      };

      formData.append("seo", JSON.stringify(seoObject));

      const apiUrl = import.meta.env.VITE_API_URL;

      const res = await axios.post(`${apiUrl}/blogs/post`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Blog posted successfully!");

      setForm({
        title: "",
        content: "",
        thumbnailImage: null,
        category: "",
        metaTitle: "",
        metaDescription: "",
        keywords: "",
      });
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-black dark:text-white rounded-2xl shadow-lg space-y-6"
    >
      <Toaster position="top-right" />
      <h2 className="text-3xl font-bold text-center">Post a New Blog</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {image && (
          <div className="flex justify-center items-center">
            <img
              className="h-32 w-32 object-cover border-1 "
              src={URL.createObjectURL(image)}
              alt="Selected"
            />
          </div>
        )}
        <input
          type="file"
          name="thumbnailImage"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setImage(file);
          }}
          accept="image/*"
          className="w-full bg-transparent px-4 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full px-4 py-2 border bg-transparent border-gray-300 rounded-md"
          required
        />
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full bg-transparent px-4 py-2 border border-gray-300 rounded-md"
          required
        >
          <option value="" className="bg-black/70 text-white">
            Select a Category
          </option>
          {categories.map((cat) => (
            <option
              key={cat}
              value={cat}
              className="cursor-pointer bg-black/70 hover:bg-transparent text-white px-4 py-2"
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Write your blog content here..."
          rows={8}
          className="w-full bg-transparent px-4 py-2 border border-gray-300 rounded-md"
          required
        ></textarea>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="metaTitle"
            value={form.metaTitle}
            onChange={handleChange}
            placeholder="Meta Title"
            className="w-full bg-transparent px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="metaDescription"
            value={form.metaDescription}
            onChange={handleChange}
            placeholder="Meta Description"
            className="w-full bg-transparent px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <input
          type="text"
          name="keywords"
          value={form.keywords}
          onChange={handleChange}
          placeholder="SEO Keywords (comma separated)"
          className="w-full bg-transparent px-4 py-2 border border-gray-300 rounded-md"
        />
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-md shadow-lg transition"
        >
          {isSubmitting ? "Posting..." : "Post Blog"}
        </motion.button>
      </form>
    </motion.div>
  );
};

const FadeInSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const BlogsPostPage = () => {
  return (
    <section>
      <Helmet>
        <title>Blog Posting || Navi Infosys</title>
        <meta name="content" content="Post blogs" />
        <link
          rel="canonical"
          href="https://naviinfosys.sarojpanthi.tech/blogs"
        />
      </Helmet>

      <div className="min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark">
        <section className="py-20 px-4 bg-gradient-to-b from-background-light to-background dark:from-background-light-dark dark:to-background-dark">
          <div className="max-w-6xl mx-auto text-center">
            <FadeInSection>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Post{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Blogs
                </span>
              </h1>
            </FadeInSection>
          </div>
        </section>

        <section className="pb-32 px-4">
          <div className="max-w-6xl mx-auto">
            <BlogPostForm />
          </div>
        </section>
      </div>
    </section>
  );
};

export default BlogsPostPage;
