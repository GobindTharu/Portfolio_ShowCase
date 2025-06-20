const validateReqBody = (validationSchema) => {
  return async (req, res, next) => {
    try {
      const validatedData = await validationSchema.validate(req.body);

      req.body = validatedData;
      next();
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  };
};

export const stringParser = (req, res, next) => {
  // Fix: Convert `seo` from JSON string to object before validation
  try {
    if (typeof req.body.seo === "string") {
      req.body.seo = JSON.parse(req.body.seo);
    }
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid SEO format" });
  }
};

export default validateReqBody;
