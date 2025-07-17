import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Job description is required"],
    },
    requirements: {
      qualification: {
        type: String,
        default: "",
      },
      skills: {
        type: [String],
        default: [],
      },
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
      min: [0, "Salary must be a positive number"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    jobType: {
      type: String,
      required: [true, "Job type is required"],
      enum: ["Full-time", "Part-time", "Internship", "Contract", "Remote"],
    },
    positions: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: [true, "Job category is required"],
      enum: [
        "IT",
        "Education",
        "Marketing",
        "Finance",
        "Restaurant",
        "Hospital",
        "Other",
      ],
    },

    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    experienceLevel: {
      type: String,
      enum: ["Fresher", "Mid-Level", "Senior-Level", "Executive"],
      default: "Fresher",
    },

    offer: {
      type: String,
    },
    deadline: {
      type: Date,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      
    },

    //  after apply the jobs store loggedInUserId in Array of obj. Application table
    application: [
      { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const JobTable = mongoose.model("Job", jobSchema);
