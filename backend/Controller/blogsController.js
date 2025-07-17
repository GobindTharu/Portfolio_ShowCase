import express from "express";
import cloudinary from "../Config/cloudinary.js";
import getDataUri from "../Config/datauri.js";
import { singleUpload } from "../Middleware/multer.js";
import { validateReqBody } from "../Middleware/vakidate.req.body.js";
import { validateMongoIdFromReqParams } from "../Middleware/validate.mongo.id.js";
import BlogsTable from "../Model/blogs.model.js";
import { blogValidationSchema } from "../Validation/blogs.validation.schema.js";
import { paginationSchema } from "../Validation/pagination.schema.js";

const router = express.Router();

//? Blog Posting api

router.post(
  "/blogs/post",
  singleUpload,
  validateReqBody(blogValidationSchema),
  async (req, res) => {
    try {
      const { title, content, category } = req.body;

      const file = req.file;
      if (!title || !content || !category || !file) {
        return res
          .status(400)
          .json({ message: "Some required field are missing" });
      }
      const cloudResponse = await cloudinary.uploader.upload(
        getDataUri(file).content,
        {
          quality: "auto", // auto compress
          fetch_format: "auto", // use WebP/AVIF if possible
        }
      );

      await BlogsTable.create({
        title: title.trim(),
        content: content.trim(),
        category,
        thumbnailImage: cloudResponse.secure_url,

        // author means logged in user of app || here default null

        author: req.user?._id || null,
      });
      return res
        .status(201)
        .json({ message: "Blogs Creation Successful", success: true });
    } catch (error) {
      console.error("Blog creation failed:", error.message);
      res.status(500).json(error.message);
    }
  }
);

// ?All blogs Lists with pagination

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
            author: 1,
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

//?  all blogs list not used yet

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

//? Blogs delete

router.delete(
  "/blogs/delete/:id",

  validateMongoIdFromReqParams,

  async (req, res) => {
    const blogsId = req.params.id;

    await BlogsTable.deleteOne({ _id: blogsId });

    return res.status(200).send({ message: "Blogs is deleted successfully." });
  }
);
router.put(
  "/blogs/update/:id",
  validateMongoIdFromReqParams,
  async (req, res) => {
    const blogsId = req.params.id;
    const newValues = req.body;

    await BlogsTable.updateOne(
      { _id: blogsId },
      {
        $set: {
          ...newValues,
        },
      }
    );
  }
);
export { router as blogsController };
