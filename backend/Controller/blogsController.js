import express from "express";
import { singleUpload } from "../Middleware/multer.js";
import validateReqBody from "../Middleware/Req.body.validate.js";
import BlogsTable from "../Model/blogs.model.js";
import { blogValidationSchema } from "../Validation/blogs.validation.schema.js";
import { paginationSchema } from "../Validation/pagination.schema.js";

const router = express.Router();

// Blog Posting

router.post(
  "/blogs/post",
  singleUpload,
  (req, res, next) => {
    // Fix: Convert `seo` from JSON string to object before validation
    try {
      if (typeof req.body.seo === "string") {
        req.body.seo = JSON.parse(req.body.seo);
      }
      next();
    } catch (err) {
      return res.status(400).json({ message: "Invalid SEO format" });
    }
  },
  validateReqBody(blogValidationSchema),
  async (req, res) => {
    try {
      const { title, content, category, thumbnailImage, seo } = req.body;

      if (!title || !content || !category) {
        return res
          .status(400)
          .json({ message: "Some required field are missing" });
      }

      const { metaTitle = "", metaDescription = "", keywords = [] } = seo;

      const normalizedKeywords = Array.isArray(keywords)
        ? keywords
            .map((s) => s.trim().toLowerCase())
            .filter((s) => s.length > 0)
        : typeof keywords === "string"
        ? keywords
            .split(",")
            .map((s) => s.trim().toLowerCase())
            .filter((s) => s.length > 0)
        : [];

      const IsDuplicate = await BlogsTable.findOne({
        title: title.trim(),
        content: content.trim(),
        thumbnailImage: thumbnailImage.trim(),
        category,
      });

      if (IsDuplicate) {
        return res.status(409).json({
          message: "This blog  has already been posted.",
          success: false,
        });
      }

      const blogs = await BlogsTable.create({
        title: title.trim(),
        content: content.trim(),
        thumbnailImage: thumbnailImage.trim(),
        category,
        seo: {
          metaTitle: metaTitle.trim(),
          metaDescription: metaDescription.trim(),
          keywords: normalizedKeywords,
        },
        author: req.user?._id || null,
      });
      return res
        .status(201)
        .json({ message: "Blogs Creation Successful", blogs, success: true });
    } catch (error) {
      console.error("Blog creation failed:", error.message);
      res.status(500).json(error.message);
    }
  }
);

// All blogs Lists with pagination

router.post(
  "/blogs/list",
  validateReqBody(paginationSchema),
  async (req, res) => {
    try {
      const { page, limit } = req.body;

      const skip = (page - 1) * limit;

      const blogs = await BlogsTable.aggregate([
        {
          $match: {},
        },
        {
          $sort: { createdAt: -1 },
        },
        { $skip: skip },
        { $limit: limit },
        {
          $project: {
            title: 1,
            content: 1,
            thumbnailImage: 1,
            category: 1,
            createdAt: 1,
          },
        },
      ]);

      const totalItems = await BlogsTable.find().countDocuments();

      const totalPage = Math.ceil(totalItems / limit);

      return res.status(200).send({
        blogs,
        totalPage,
        success: true,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json(error.message);
    }
  }
);

//  all blogs list

router.get("/blogs/list-all", async (req, res) => {
  try {
    const blogs = await BlogsTable.aggregate([
      {
        $match: {},
      },

      {
        $project: {
          title: 1,
          content: 1,
          thumbnailImage: 1,
          category: 1,
        },
      },
    ]);

    return res.status(200).send({
      blogs,
      success: true,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

export { router as blogsController };
