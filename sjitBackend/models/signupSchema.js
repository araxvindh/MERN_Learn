const mdb = require('mongoose')
const signupSchema = mdb.Schema({
    fisrtName : String,
    LastName : String,
    email : String ,
    Password : String,
    phoneNumber : Number 
})

const signup_Schema = mdb.model("signup",signupSchema);

module.exports = signup_Schema