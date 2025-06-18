import axios from "axios";
import { motion } from "framer-motion";
import { Bookmark } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { getDaysLeftToApply, getPostedDaysAgo } from "../Constants/const";

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

export const Job = ({ jobs }) => {
  const navigate = useNavigate();
  const daysLeft = getDaysLeftToApply(jobs.deadline);
  const postedAgo = getPostedDaysAgo(jobs.createdAt);

  return (
    <div className="bg-background dark:bg-background-light-dark p-6 md:px-5 md:py-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300max-w-sm  overflow-hidden  duration-300 px-3 py-6  border-gray-100 mr-5 my-4">
      <div className="flex items-center justify-between ">
        <p className="text-sm text-gray-500 mb-2">{postedAgo}</p>
        <button className=" rounded-full text-sm text-white bg-gray-400 hover:bg-gray-300 p-2 border">
          <Bookmark />
        </button>
      </div>
      {/* //TODO: if here other company posting jobs then we need to handle company  on backend by posting company details  in this case company null default Navi infosys detail*/}
      <div className="flex items-center gap-2 my-2">
        <button className="py-1">
          <div className="flex items-center justify-center w-16 h-16 border-1 border-gray-400">
            <img
              src={jobs?.company?.logo || "/logo.png"}
              alt=" company logo"
              className="w-32 h-32  object-cover "
            />
          </div>
        </button>
        <div>
          <h1 className="font-medium text-lg ">
            {jobs?.company?.name || "Navi Infosys"}
          </h1>
          <p className="text-sm text-gray-500 mb-2">
            {jobs?.location || "Baneshwar, Kathamandu"}
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{jobs?.title}</h1>

        <p className="h-32 text-sm overflow-y-hidden text-gray-500">
          {jobs?.requirements?.qualification.slice(0, 300) ||
            "Qualified Employ with Expertise with All the requirements to meet the company and collaborative "}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-12">
        <span className="inline-block bg-blue-100 text-blue-500 text-sm font-medium px-2 py-1 rounded-full shadow-sm">
          {jobs?.positions} Positions
        </span>
        <span className="inline-block bg-blue-100 text-blue-500 text-sm font-medium px-2 py-1 rounded-full shadow-sm">
          {jobs.jobType}
        </span>
        <span className="inline-block bg-blue-100 text-blue-500 text-sm font-medium px-2 py-1 rounded-full shadow-sm">
          Rs.{jobs?.salary}salary
        </span>
      </div>
      <p className="flex justify-end pt-6 text-sm text-blue-600">{daysLeft}</p>
      <div className="flex justify-between mt-3 px-2">
        <button
          onClick={() => navigate(`/jobs/jobs-details/${jobs?._id}`)}
          className="px-3 py-1 text-white bg-gray-950 rounded-lg mr-2 disabled:opacity-50"
        >
          Details
        </button>
        <button className="px-3 py-1 text-white bg-gray-950 rounded-lg disabled:opacity-50">
          Save
        </button>
      </div>
    </div>
  );
};

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get("http://localhost:8000/jobs/get-all");
        console.log("Jobs :", res.data.jobs);
        setJobs(res.data.jobs || []);
      } catch (error) {
        console.error("Failed to fetch jobs ", error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllJobs();
  }, []);

  return (
    <section>
      <Helmet>
        <title>Jobs || Navi Infosys</title>
        <meta name="description" content={jobs?.description} />
        <link
          rel="canonical"
          href="https://naviinfosys.sarojpanthi.tech/jobs"
        />
      </Helmet>

      <div className="min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background-light to-background dark:from-background-light-dark dark:to-background-dark">
          <div className="max-w-6xl mx-auto text-center">
            <FadeInSection>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Recent{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Jobs
                </span>
              </h1>
              <p className="text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto">
                This space showcases current openings across various roles in
                software development, design, project management, and more ... .
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* jobs Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl h-[88vh] overflow-y-scroll mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {jobs.map((jobs, index) => (
                <FadeInSection key={index} delay={index * 0.2}>
                  <Job key={jobs?._id} jobs={jobs} />
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </section>
  );
};

export default JobsPage;
