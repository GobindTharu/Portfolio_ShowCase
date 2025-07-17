import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useParams } from "react-router-dom";
import { getDaysLeftToApply, getPostedDaysAgo } from "../Constants/const";
import { useEffect, useState } from "react";
import axios from "axios";

const FadeInSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

const JobDetails = () => {
  const params = useParams();
  const jobId = params.id;
  const [isApplied, setIsApplied] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const daysLeft = getDaysLeftToApply(jobs.deadline);
  const postedAgo = getPostedDaysAgo(jobs.createdAt);

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${apiUrl}/jobs/detail/${jobId}`);
        console.log("Jobs:", res.data.jobs);
        setJobs(res.data.jobs || []);
      } catch (error) {
        console.error("Failed to fetch jobs", error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllJobs();
  }, []);

  const applyJobHandler = async () => {
    setIsApplied(true);
    toast.success("Applied Successfully");
  };

  return (
    <>
      <Helmet>
        <title>Job Details</title>
      </Helmet>
      <div className="min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <FadeInSection>
              <div className="bg-background dark:bg-background-dark p-8 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center space-x-5 mb-6">
                  <img
                    src={jobs?.company?.logo || "/logo.png"}
                    alt="logo"
                    className="w-20 h-20 object-contain"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-primary">
                      {jobs?.title}
                    </h2>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary">
                      {jobs?.company?.name || "Infosys"}
                    </p>
                    <p className="text-sm flex items-center text-text-light-secondary dark:text-text-dark-secondary">
                      <FaMapMarkerAlt className="mr-1" />{" "}
                      {jobs?.location || "Baneshwar, Kathamandu"}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-sm text-text-light-secondary dark:text-text-dark-secondary">
                  <p>
                    <strong>Salary:</strong> Rs. {jobs?.salary}
                  </p>
                  <p>
                    <strong>Experience Level:</strong> {jobs?.experienceLevel}
                  </p>
                  <p>
                    <strong>Category:</strong> {jobs?.category}
                  </p>
                  <p>
                    <strong>Job Type:</strong> {jobs?.jobType}
                  </p>
                  <p>
                    <strong>
                      <FaCalendarAlt className="inline" /> Posted:
                    </strong>{" "}
                    {postedAgo}
                  </p>
                  <p>
                    <strong>
                      <FaCalendarAlt className="inline" /> Deadline:
                    </strong>{" "}
                    {daysLeft}
                  </p>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <span className="text-text-light-secondary dark:text-text-dark-secondary">
                    Applicants: {jobs?.application?.length || 0}
                  </span>
                  <button
                    onClick={isApplied ? null : applyJobHandler}
                    disabled={isApplied}
                    className={`${
                      isApplied
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    } text-white px-6 py-2 rounded-xl font-semibold transition`}
                  >
                    {isApplied ? "Already Applied" : "Apply Now"}
                  </button>
                </div>
              </div>
            </FadeInSection>

            {[
              {
                title: "Job Specification",
                content: (
                  <>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary">
                      <strong>Qualification Required:</strong>{" "}
                      {jobs?.requirements?.qualification}
                    </p>
                    <p className="mt-3 font-semibold text-text-light-secondary dark:text-text-dark-secondary">
                      Key Skills:
                    </p>
                    <ul className="list-disc list-inside text-sm mt-1 text-text-light-secondary dark:text-text-dark-secondary">
                      {jobs?.requirements?.skills?.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))}
                    </ul>
                    <p className="mt-2 text-text-light-secondary dark:text-text-dark-secondary">
                      <strong>Resume:</strong>{" "}
                      {jobs?.requirements?.resume ? "Required" : "Not Required"}
                    </p>
                  </>
                ),
              },
              {
                title: "Job Description",
                content: (
                  <p className="text-sm leading-relaxed text-text-light-secondary dark:text-text-dark-secondary">
                    {jobs?.description}
                  </p>
                ),
              },
              {
                title: "What We Offer",
                content: (
                  <p className="text-text-light-secondary dark:text-text-dark-secondary">
                    {jobs?.offer || "Not Specified"}
                  </p>
                ),
              },
            ].map((section, idx) => (
              <FadeInSection key={idx} delay={idx * 0.1}>
                <div className="bg-background dark:bg-background-dark p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    {section.title}
                  </h3>
                  <div>{section.content}</div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <div className="space-y-8">
            <FadeInSection delay={0.2}>
              <div className="bg-background dark:bg-background-dark p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-3">
                  About Company
                </h3>
                <p className="text-text-light-dark italic">Infosys</p>
                <p>Gangabu, Kathmandu</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="bg-background dark:bg-background-dark p-6 rounded-lg shadow-lg border border-gray-200 h-120 overflow-y-scroll">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Similar Jobs
                </h3>
                <ul className="space-y-4 text-sm text-text-light-secondary dark:text-text-dark-secondary">
                  {[
                    {
                      title: "Senior Finance Officer",
                      company: "MAW Expance Pvt. Ltd.",
                      views: 1371,
                      deadline: "11 days from now",
                    },
                    {
                      title: "IT Officer",
                      company: "Path Investment Pvt. Ltd.",
                      views: 1633,
                      deadline: "9 days from now",
                    },
                    {
                      title: "Regional Sales Manager",
                      company: "Pioneer Marketing",
                      views: 1030,
                      deadline: "14 days from now",
                    },
                    {
                      title: "Restaurant Supervisor",
                      company: "Newa Ghasa",
                      views: 840,
                      deadline: "4 days from now",
                    },
                    {
                      title: "Sales Person (Remote)",
                      company: "Mindrisers Institute of Tech.",
                      views: 319,
                      deadline: "Apply By Today",
                    },
                  ].map((job, idx) => (
                    <li key={idx}>
                      <strong className="text-primary">{job.title}</strong>
                      <p className="text-text-light-secondary dark:text-text-dark-secondary">
                        {job.company} <br />
                        {job.views} views <br />
                        Deadline: {job.deadline}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
