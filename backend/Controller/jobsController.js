import express from "express";
import { validateReqBody } from "../Middleware/vakidate.req.body.js";
import { validateMongoIdFromReqParams } from "../Middleware/validate.mongo.id.js";
import { JobTable } from "../Model/jobs.model.js";
import { jobValidationSchema } from "../Validation/jobs.vakidation schenma.js";
const router = express.Router();

router.post(
  "/jobs/post",
  validateReqBody(jobValidationSchema),
  async (req, res) => {
    try {
      const {
        title,
        description,
        requirements,
        salary,
        location,
        jobType,
        experience,
        position,
        category,
        deadline,
        offer,
      } = req.body;

      if (
        !title ||
        !description ||
        !salary ||
        !location ||
        !jobType ||
        experience == null ||
        position == null ||
        !category ||
        !requirements ||
        !deadline
      ) {
        return res.status(400).json({
          message: "Some required fields are missing",
          success: false,
        });
      }

      const { qualification = "", skills = [] } = requirements;

      const normalizedSkills = Array.isArray(skills)
        ? skills.map((s) => s.trim().toLowerCase()).filter((s) => s.length > 0)
        : typeof skills === "string"
        ? skills
            .split(",")
            .map((s) => s.trim().toLowerCase())
            .filter((s) => s.length > 0)
        : [];

      const duplicateJobs = await JobTable.find({
        title: title.trim(),
        description: description.trim(),
        salary: Number(salary),
        location: location.trim(),
        jobType,
        category,
        experienceLevel: experience,
        
        company: req.id || null,
        created_by: req.id || null,
      });

      const isDuplicate = duplicateJobs.some((job) => {
        const existingSkills = Array.isArray(job.requirements.skills)
          ? [...job.requirements.skills].map((s) => s.toLowerCase()).sort()
          : [];

        const newSkills = [...normalizedSkills].sort();

        return (
          job.requirements.qualification?.toLowerCase().trim() ===
            qualification.toLowerCase().trim() &&
          JSON.stringify(existingSkills) === JSON.stringify(newSkills) &&
          job.positions === Number(position)
        );
      });

      if (isDuplicate) {
        return res.status(409).json({
          message: "This job has already been posted.",
          success: false,
        });
      }

      const newJob = await JobTable.create({
        title: title.trim(),
        description: description.trim(),
        requirements: {
          qualification: qualification.trim(),
          skills: normalizedSkills,
        },
        salary: Number(salary),
        location: location.trim(),
        jobType,
        experienceLevel: experience,
        positions: Number(position),
        category,
        deadline: deadline || null,
        offer: offer || "",

        // not provide in frontend kept defaults

        company: req.id || null,
        created_by: req.id || null,
      });

      return res.status(201).json({
        message: "Job created successfully",
        job: newJob,
        success: true,
      });
    } catch (error) {
      console.error("Job post error:", error);
      return res.status(500).json({
        message: error.message || "Server Error",
        success: false,
      });
    }
  }
);
// ? get all jobs from Database

router.get("/jobs/get-all", async (req, res) => {
  try {
    const jobs = await JobTable.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


//? this is for detail page get job by id

router.get(
  "/jobs/detail/:id",
  validateMongoIdFromReqParams,
  async (req, res) => {
    try {
      const jobId = req.params.id;

      const jobs = await JobTable.findById(jobId).sort({ createdAt: -1 });

      if (!jobs) {
        return res
          .status(404)
          .json({ message: "Jobs Not Found", jobs, success: false });
      }
      return res.status(200).json({
        jobs,
        success: true,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
);

export { router as jobsController };
