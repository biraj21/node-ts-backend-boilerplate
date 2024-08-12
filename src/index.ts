import "module-alias/register";

import express from "express";
import type { ErrorRequestHandler } from "express";

import env from "@app/config/env.config";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "hello world (docker branch)",
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "not found",
  });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error("internal server error:", err);
  res.status(500).json({
    success: false,
    message: "internal server error",
  });
};

app.use(errorHandler);

app.listen(env.PORT, () => console.log(`server running on port ${env.PORT}`));
