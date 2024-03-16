import sharp from "sharp";
import fs from "fs";
import path from "path";
import { writeFile } from "node:fs/promises";

const getResizedImage = async (
  name: string,
  width: number,
  height: number
): Promise<string | null> => {
  const resizedImagePath = path.resolve(
    "./assets/images/resized",
    `${`${name}-${width}-${height}.jpg`}`
  );
  if (fs.existsSync(resizedImagePath)) {
    return resizedImagePath;
  }

  const originImagePath = path.resolve("./assets/images/origin", `${name}.jpg`);
  console.log("fs.existsSync(originImagePath", fs.existsSync(originImagePath));
  if (!fs.existsSync(originImagePath)) {
    throw new Error(
      "No such file existed. Pls input one of following file names: imageA, imageB, imageC, imageD"
    );
  }

  const newImageBuffer = await sharp(originImagePath)
    .resize(width, height, { fit: "cover" })
    .toBuffer();

  await writeFile(resizedImagePath, newImageBuffer);

  return resizedImagePath;
};

export { getResizedImage };
