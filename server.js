const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(express.static("Main"));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Main/HTML.html");
})
app.post("/",(req,res)=>{
    console.log(req.body);
    
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth:{
            user:"tarikulislam3639@gmail.com",
            pass:"epbwkloaqtfjbxxr"
        }
    });

    const SendData ={
        from:"tarikulislam3639@gmail.com",
        to:"tarikulislam3639@gmail.com",
        subject: req.body.select_option,
        text: `Name: ${req.body.name}\nPhone: ${req.body.phoneNumber}\nEmail: ${req.body.email}\nRequire Topic : ${req.body.select_option}\nMessage: ${req.body.massage}`
    }

    transporter.sendMail(SendData,(error,info)=>{
        if(error)
        {
            console.log(error);
            res.send(error);
        }
        else{
            console.log("Email send"+info);
            res.send("Success");
        }
    })
    
})
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})