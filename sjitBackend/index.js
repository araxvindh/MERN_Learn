const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require('./Models/signupSchema');
const app = express();
const PORT = 3001;

dotenv.config();
app.use(express.json()); 

mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MONGODB CONNECTION SUCCESS");
  })
  .catch((err) => {
    console.log("CHECK YOUR CONNECTION", err);
  });


app.post("/signup", (req, res) => {
  try {
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber:phoneNumber ,
      password: password
    });
    newSignup.save();
    console.log("SIGNUP SUCCESS");
    ({ message: "SIGNUP DONE", isSignup: true }); 
  } catch (error) {
    console.log("ERROR", error);
    res.status(201).json({ message: "SIGNUP FAILED" ,isSignup:false}); 
  }
});

app.listen(PORT, () => console.log("SERVER STARTED"));