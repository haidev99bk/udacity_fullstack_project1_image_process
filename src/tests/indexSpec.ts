import supertest from "supertest";
import app from "../app";
import fs from "node:fs/promises";
import path from "path";

const request = supertest(app);

describe("Test responses from endpoints /", function () {
  it("Endpoint: /", async function () {
    const res = await request.get("/");
    expect(res.statusCode).toEqual(200);
  });

  it("Endpoint: /api/images?fileName=imageA&width=200&height=200", async function () {
    const res = await request.get(
      "/api/images?fileName=imageA&width=200&height=200"
    );
    expect(res.statusCode).toEqual(200);
  });
});

afterAll(async () => {
  // remove files after testing
  const files = await fs.readdir(
    path.resolve("dist/public/assets", "images", "resized")
  );
  files.forEach(async (file: string) => {
    await fs.unlink(
      path.resolve("dist/public/assets", "images", "resized", file)
    );
  });
});
