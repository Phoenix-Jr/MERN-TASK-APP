const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./backend/config.env" });
DB = process.env.MONGO_URL;
console.log(DB);
mongoose.set("strictQuery", true);
mongoose.connect(DB, { useNewUrlParser: true }).then(() => {
  console.log("Db Connected succcess");
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
// const express = require("express");
// const connectDb = require("./backend/config/connectDB");
// // const dotenv = require("dotenv");
// const Task = require("./backend/models/taskModel");
// const taskRoutes = require("./backend/routes/taskRoute");
// // dotenv.config({ path: "../config.env" });
// // connectDb();
// const app = express();
// const PORT = process.env.PORT || 5000;
// const dotenv = require("dotenv");
// dotenv.config({ path: "./config.env" });

// //Middelware
// // const looger = (req, res, next) => {};
// app.use(express.json());
// app.use(taskRoutes);
// // app.use(express.urlencoded({ extended: false }));

// // console.log(process.env.MONGO_URL);

// const startServer = async () => {
//   try {
//     await connectDb();
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT} `);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// startServer();
