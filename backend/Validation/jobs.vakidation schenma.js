import * as yup from "yup";

export const jobValidationSchema = yup.object({
  title: yup.string().required("Job title is required").trim(),

  description: yup.string().required("Job description is required"),

  requirements: yup.object({
    qualification: yup.string().default(""),
    skills: yup.string().trim().default([]),
  }),

  salary: yup
    .number()
    .required("Salary is required")
    .min(0, "Salary must be a positive number"),

  location: yup.string().required("Location is required").trim(),

  jobType: yup
    .string()
    .required("Job type is required")
    .oneOf(["Full-time", "Part-time", "Internship", "Contract", "Remote"]),

  position: yup
    .number()
    .required("Number of positions is required")
    .min(1, "At least one position is required"),

  category: yup
    .string()
    .required("Job category is required")
    .oneOf([
      "IT",
      "Education",
      "Marketing",
      "Finance",
      "Restaurant",
      "Hospital",
      "Other",
    ]),

  company: yup
    .string()
    .nullable()
    .matches(/^[0-9a-fA-F]{24}$/, "Invalid company ID"),

  experienceLevel: yup
    .string()
    .oneOf(["Fresher", "Mid-Level", "Senior-Level", "Executive"])
    .default("Fresher"),

  offer: yup.string().nullable(),

  deadline: yup.date().nullable(),

  isActive: yup.boolean().default(true),

  created_by: yup
    .string()
    .nullable()
    .matches(/^[0-9a-fA-F]{24}$/, "Invalid user ID"),

  application: yup
    .array()
    .of(yup.string().matches(/^[0-9a-fA-F]{24}$/, "Invalid application ID"))
    .default([]),
});
