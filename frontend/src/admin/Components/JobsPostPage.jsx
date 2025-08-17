import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const jobTypes = ["Full-time", "Part-time", "Internship", "Contract", "Remote"];
const categories = [
  "IT",
  "Education",
  "Marketing",
  "Finance",
  "Restaurant",
  "Hospital",
  "Other",
];
const experienceLevels = ["Fresher", "Mid-Level", "Senior-Level", "Executive"];

const JobPostForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    qualification: "",
    skills: "",
    salary: "",
    location: "",
    jobType: "",
    position: "",
    category: "",
    deadline: "",
    offer: "",
    experienceLevel: "Fresher",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      title: form.title,
      description: form.description,
      requirements: {
        qualification: form.qualification,
        skills: form.skills,
      },
      salary: Number(form.salary),
      location: form.location,
      jobType: form.jobType,
      position: Number(form.position),
      category: form.category,
      deadline: form.deadline,
      offer: form.offer,
      experience: form.experienceLevel,
    };

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      const res = await axios.post(`${apiUrl}/jobs/post`, payload);
      toast.success("Job posted successfully!");
      setForm({
        title: "",
        description: "",
        qualification: "",
        skills: "",
        salary: "",
        location: "",
        jobType: "",
        position: "",
        category: "",
        deadline: "",
        offer: "",
        experienceLevel: "Fresher",
      });
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to post job");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-32 bg-transparent shadow-md rounded-xl">
      <Toaster position="top-right" />
      <h2 className="text-2xl font-bold mb-4 text-center">Post a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Job Title"
          className="w-full  bg-transparent border p-2 rounded"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Job Description"
          rows={5}
          className="w-full bg-transparent border p-2 rounded"
          required
        />
        <div className="grid  grid-cols-2 gap-4">
          <input
            type="text"
            name="qualification"
            value={form.qualification}
            onChange={handleChange}
            placeholder="Qualification"
            className="w-full bg-transparent border p-2 rounded"
          />
          <input
            type="text"
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="Skills (comma separated)"
            className="w-full bg-transparent border p-2 rounded"
          />
          <input
            type="number"
            name="salary"
            value={form.salary}
            onChange={handleChange}
            placeholder="Salary"
            className="w-full bg-transparent border p-2 rounded"
            required
          />
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full bg-transparent border p-2 rounded"
            required
          />

          <select
            name="jobType"
            value={form.jobType}
            onChange={handleChange}
            className="w-full bg-transparent border p-2 rounded"
            required
          >
            <option value="" className="bg-black/70 text-white">
              Select Job Type
            </option>
            {jobTypes.map((type) => (
              <option
                key={type}
                value={type}
                className="bg-black/70 text-white"
              >
                {type}
              </option>
            ))}
          </select>

          <input
            type="number"
            name="position"
            value={form.position}
            onChange={handleChange}
            placeholder="Number of Positions"
            className="w-full bg-transparent border p-2 rounded"
            required
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full bg-transparent border p-2 rounded"
            required
          >
            <option value="" className="bg-black/70 text-white">
              Select Category
            </option>
            {categories.map((category) => (
              <option
                key={category}
                value={category}
                className="bg-black/70 text-white"
              >
                {category}
              </option>
            ))}
          </select>

          <input
            type="Date"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
            className="w-full bg-transparent border p-2 rounded"
          />
          <input
            type="text"
            name="offer"
            value={form.offer}
            onChange={handleChange}
            placeholder="Offer (if any)"
            className="w-full bg-transparent border p-2 rounded"
          />

          <select
            name="experienceLevel"
            value={form.experienceLevel}
            onChange={handleChange}
            className="w-full bg-transparent border p-2 rounded"
          >
            {experienceLevels.map((level) => (
              <option
                key={level}
                value={level}
                className="bg-black/70 text-white"
              >
                {level}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full  bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {submitting ? "Posting..." : "Post Job"}
        </button>
      </form>
    </div>
  );
};

export default JobPostForm;
