import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  content: {
    type: String,
    required: true,
  },
  thumbnailImage: {
    type: String,
    required: true,
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

blogSchema.index({ title: 1, content: 1, category: 1 }, { unique: true });

const BlogsTable = mongoose.model("Blog", blogSchema);

export default BlogsTable;
