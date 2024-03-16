import express from "express";

const images = express.Router();

images.get("/images", (req, res) => {
  console.log(req.query);
});

export default images;
