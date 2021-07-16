const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const Cors = require("cors");
const path = require("path");
const http = require("http");
const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/users.route");
const postRoute = require("./routes/posts.route");
const categoryRoute = require("./routes/categories.route");

// app config
dotenv.config();
const server = http.createServer(app);
const Port = 8000 || process.env.PORT;
app.use("/images", express.static(path.join(__dirname, "/images")));

// midleware
app.use(express.json());
app.use(Cors());
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

// db config
const uri = process.env.URI_MONGO_CONNECT;
mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongoDB database connection established succesfully");
});

// api endpoint
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

// listen
server.listen(Port, () => {
  console.log("Backend is running: " + Port);
});
