import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 150,
  },
  content: {
    type: String,
    required: true,
  },
  thumbnailImage: {
    type: String,
  },
  category: {
    type: String,
    enum: [
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

    required: true,
    lowercase: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  seo: {
    metaTitle: { type: String },
    metaDescription: { type: String },
    keywords: [String],
  },
  likes: {
    type: Number,
    default: 0,
  },

  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      comment: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BlogsTable = mongoose.model("Blog", blogSchema);

export default BlogsTable;
