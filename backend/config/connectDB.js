const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// console.log(process.env.a);
const connectDB = async () => {
  //   DB = process.env.MONGO_URL;
  //   console.log(DB);
  //   mongoose
  //     .connect(DB, {
  //       useNewUrlParser: true,
  //     })
  //     .then(() => {
  //       // console.log(con.connections);
  //       console.log("Db connected success");
  //     });
  try {
    // console.log("Hello");
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected `);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
