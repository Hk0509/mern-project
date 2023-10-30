const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors"); 

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://<username>:<password>@cluster0.laqcmte.mongodb.net/merntutorial"
);

app.get("/getUsers", async (req, res) => {
  try {
    const response = await UserModel.find({});
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(3001, () => {
  console.log("Server runs perfectly!!");
});
