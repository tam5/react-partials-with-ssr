import path from "path";
import fs from "fs";
import express from "express";
import ky from "ky";
const app = express();
const port = 3333;

const __dirname = path.resolve(path.dirname(""));
const remoteUrl = "http://localhost:3000/note";

app.get("/", async (req, res) => {
  const partial = await ky.get(remoteUrl).text();

  const html = fs
    .readFileSync(__dirname + "/index.html", "utf8")
    .replace(`<!--INJECT-POINT-->`, partial);

  res.status(200).set({ "Content-Type": "text/html" }).send(html);
});

app.listen(port, () => {
  console.log(`Shell app listening at http://localhost:${port}`);
});
