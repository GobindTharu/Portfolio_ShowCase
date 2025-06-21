import * as yup from "yup";

export const blogValidationSchema = yup.object(
  {
    title: yup
      .string()
      .trim()
      .required("Title is required")
      .max(100, "Title cannot exceed 100 characters"),

    content: yup.string().required("Content is required"),

    thumbnailImage: yup.string(),

    category: yup
      .string()
      .required("Category is required")
      .oneOf(
        [
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
        ],
        "Invalid category"
      ),

    author: yup.string().matches(/^[0-9a-fA-F]{24}$/, "Invalid author ID"),

    likes: yup.number().min(0).notRequired(),

    comments: yup.array().of(
      yup.object({
        user: yup.string().matches(/^[0-9a-fA-F]{24}$/, "Invalid user ID"),
        comment: yup.string().required("Comment cannot be empty"),
        createdAt: yup.date().notRequired(),
      })
    ),
  },
  {
    timestamps: true,
  }
);
