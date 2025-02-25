const express = require("express");
const mdb = require("mongoose"); //mdb=>mongoDB
const dotenv = require("dotenv")
const signup_Schema = require("./models/signupSchema")
const app = express();
app.use(express.json());
const PORT = 3001;
dotenv.config();

mdb
    .connect(process.env.MONGODB_URL)   //(it can be used another type to block visibilty=>process.env.MONGODB_URL). (localhost if not works use this ip: 127.0.0.1:27017)
    .then(() => {
        console.log("MDB Connection Successful");
    })
    .catch((err) => {
        console.log("Check yout Connection", err);
    });

app.post("/signup", (req, res) => {
    try {
        console.log(req.body);
        const { firstName, lastName, email, password, phoneNumber } = req.body;
        const newSignup = new signup_Schema({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            password: password
        });
        newSignup.save();
        console.log("SIGNUP SUCCESS");
        res.status(201).json({ message: "SIGNUP DONE", isSignup: true });
    } catch (error) {
        console.log("ERROR", error);
        res.status(201).json({ message: "SIGNUP FAILED", isSignup: false });
    }
});

app.listen(PORT, () => console.log("Server Started Successfully"));