const express = require("express");

const {notFound, errorHandler} = require("./middlewares/errorMiddleware");

const app = express();

app.use(express.json());// json parsing middleware  ------Ye future mein JSON request body read karne ke liye use hoga.

app.get("/api/health", (req, res)=>{//200 ka matlab request successfully process hui.
  res.status(200).json({
    success: true,
    message: "Event booking server is running",
  });
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;