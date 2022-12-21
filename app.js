const express = require("express");
const morgan = require("morgan");
const taskRoute = require("./backend/routes/taskRoute");
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1", taskRoute);
module.exports = app;
