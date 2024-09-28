import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
// app.get("/", (req, res) => {
//   res.end("hello");
// });
// app.get("/server", (req, res) => {
//   res.end("hello");
// });

export default app;
