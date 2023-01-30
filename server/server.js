const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/config");
const userRoutes = require("./routes/userRoutes");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
connectDb();

app.get("/", (req, res) => {
  res.send("Api is running");
});
app.get("/api/notes", (req, res) => {
  res.send(notes);
});
app.get("/api/notes/:id", (req, res) => {
  let note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5500;
app.listen(PORT, console.log("Server is Running", PORT));
