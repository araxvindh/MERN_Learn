const express = require("express");
const mdb = require("mongoose"); 
const dotenv = require("dotenv")
const bcrypt =require('bcrypt')
const signup_Schema = require("./models/signupSchema")
const  cors =require('cors')
const app = express();
app.use(cors())
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

app.post("/signup", async(req, res) => {
    try {

        console.log(req.body);
        const { firstName, lastName, email, password, phoneNumber } = req.body;
        const hashedpass= await bcrypt.hash(password,10);
        const newSignup = new signup_Schema({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            password: hashedpass
        });
        newSignup.save();
        console.log("SIGNUP SUCCESS");
        res.status(201).json({ message: "SIGNUP DONE", isSignup: true });
    } catch (error) {
        console.log("ERROR", error);
        res.status(201).json({ message: "SIGNUP FAILED", isSignup: false });
    }
});

app.get('/getsignupdet',(req,res)=>
{
    const signUp = signup_Schema.find()
    console.log(signUp)
})



app.post("/login", async(req,res) =>
{
    try{
        const{email,password}=req.body;
        console.log(req.body);
        const user = await signup_Schema.findOne({"email":email})
        if(user)
        {
            const isValidPassword= await bcrypt.compare(password,user.password);
            console.log(isValidPassword);

            if(isValidPassword)
            {
                res.status(201).json({message:"Login Successful",isLogin:true})
            }
            else
            {
                res.status(201).json({message:"Password inCorrect",isLogin:false})
            }
           
        }
        else
        {
            res.status(201).json({message:"User not found",isLogin:false})
        }
        
       // const pass =bcrypt.compare(password,user.password);
    }
    catch(error)
    {
        res.status(201).json({message:"Login Unsuccessful",isLogin:false})
    }

})


app.listen(PORT, () => console.log("Server Started Successfully"));