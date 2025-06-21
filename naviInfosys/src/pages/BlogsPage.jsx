import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { PostedDate } from "../Constants/const";

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

// Blogs CArd

export const BlogsCard = ({ blogs }) => {
  const postedDate = PostedDate(blogs.createdAt);

  const navigate = useNavigate();
  return (
    <div
      key={blogs?._id}
      className="bg-background dark:bg-background-dark p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300max-w-sm  overflow-hidden  duration-300"
    >
      {/* Top Image or thumbnailImage*/}
      <div className="text-5xl text-primary mb-6  shadow-lg  transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        <img
          src={blogs.thumbnailImage || "/blogs.jpg"}
          className="w-full h-72 object-cover  "
        />{" "}
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">
          {postedDate || "MAY 22, 2025"}
        </p>
        <h3 className="text-2xl font-bold mb-4 text-text dark:text-text-dark leading-snug ">
          {blogs?.title}
        </h3>
        <p className="text-text-light-secondary dark:text-text-dark-secondary mb-6 text-sm ">
          {blogs?.content.slice(0, 220)}....etc.
        </p>
        <button
          onClick={() => navigate(`/blogs/details/${blogs?._id}`)}
          className="text-purple-600 hover:text-purple-800 text-sm font-medium inline-flex items-center"
        >
          Read more
          <span className="ml-1">→</span>
        </button>
      </div>
    </div>
  );
};

// ? main page for render

const BlogsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [blogs, setBlogs] = useState([]);
  const [totalPage, setTotalPage] = useState(1);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      setLoading(true);
      try {
        const apiUrl = import.meta.env.VITE_API_URL;

        const res = await axios.post(`${apiUrl}/blogs/list`, {
          page: currentPage,
          limit: 6,
        });
        setBlogs(res.data.blogs || []);
        setTotalPage(res.data.totalPage || 1);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllBlogs();
  }, [currentPage]);

  return (
    <section>
      <Helmet>
        <title>Blogs Insights || Navi Infosys</title>
        <meta name="content" content={blogs?.seo?.metaDescription} />
        <link
          rel="canonical"
          href="https://naviinfosys.sarojpanthi.tech/blogs"
        />
      </Helmet>

      <div className="min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background-light to-background dark:from-background-light-dark dark:to-background-dark">
          <div className="max-w-6xl mx-auto text-center">
            <FadeInSection>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Blogs
                </span>
              </h1>
              <p className="text-xl text-text-light-// Date formatted in month day yrssecondary dark:text-text-dark-secondary max-w-3xl mx-auto">
                Welcome to our professional blog space — where insights meet
                innovation! Here, we publish high-quality content focused on web
                development, tech trends, career experiences, and real-world
                projects.
              </p>
            </FadeInSection>
          </div>
        </section>
        {/* blogs Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs.length <= 0 ? (
                <div className="bg-background dark:bg-background-dark p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300max-w-sm  overflow-hidden  duration-300">
                  <div className="text-center py-4">No data found.</div>
                </div>
              ) : (
                blogs.map((blogs, index) => (
                  <FadeInSection key={index} delay={index * 0.2}>
                    <BlogsCard
                      key={blogs?._id}
                      blogs={blogs}
                      currentPage={currentPage}
                    />
                  </FadeInSection>
                ))
              )}
            </div>
          </div>
          <div className="flex justify-center mt-12 gap-6">
            <button
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="w-100 py-1 px-3 bg-gradient-to-r from-primary to-secondary text-white rounded-sm font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity duration-300"
            >
              Previous
            </button>
            <button
              disabled={currentPage >= totalPage}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="w-600 py-1 px-3 bg-gradient-to-r from-primary to-secondary text-white rounded-sm font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity duration-300"
            >
              Next
            </button>
          </div>
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default BlogsPage;
