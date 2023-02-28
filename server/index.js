import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.set("strictQuery", false)
mongoose.connect("mongodb://localhost:27017/QuantomDB", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("db is connected")
    })
    .catch((err) => {
        console.log("Error while connecting to the database:", err);
    });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: Date
})

const User = new mongoose.model("User", userSchema);





app.post("/login", async function (req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successfull", user: user })
            } else {
                res.send({ message: "Password didn't match" })
            }
        } else {
            res.send({ message: "User not registered" })
        }
    } catch (err) {
        res.send(err);
    }
});


// app.post("/register", function(req,res){
//     const {name, email, password } = req.body

//     User.findOne({email: email}, (err, user) => {
//         if(user) {
//         res.send({message: "User already registerd"})
//         }else{
//             const user =new User({
//                 name,
//                 email,  
//                 password
//             })
//             user.save(err =>{
//                 if(err){
//                     res.send(err)
//                 }else{
//                     res.send({message:"Sussesfully register "})
//                 }
//             })
//         }
//     })




// })
app.post("/register", async function (req, res) {
    const { name, email, password, date } = req.body;

    try {
        const user = await User.findOne({ email: email });
        if (user) {
            res.send({ message: "User already registered kindly login " });
        } else {
            const newUser = new User({
                name,
                email,
                password,
                date
            });
            await newUser.save();
            res.send({ message: "Successfully registered Kindly login again! " });
        }
    } catch (err) {
        res.send(err);
    }
});

app.listen(9000, function () {
    console.log("running on 9000")
})