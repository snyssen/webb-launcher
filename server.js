import express from "express";
import { handler as ssrHandler } from "./dist/server/entry.mjs";

const app = express();
app.use(express.static("dist/client/", {
  setHeaders: (res, _) => res.setHeader('Cache-Control', 'max-age=2592000')
}));
app.use(ssrHandler);

const port = 8080;
app.listen(port);

console.log(
  "Webb launcher version",
  process.env.APP_VERSION ?? "unkown",
  "listening on port:",
  port
);
