const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const cors = require("cors");  // Import CORS
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());  // This will allow all origins by default

// Middleware to serve static files and parse JSON requests
app.use(express.static(path.join(__dirname, "../Clint")));
app.use(express.json());

// Serve CV.pdf file when accessing the root URL
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Server/src/CV.pdf"));
});

// Handle form submission with POST request
app.post("/", (req, res) => {
    console.log(req.body);
    
    // Nodemailer setup
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "tarikulislam3639@gmail.com",
            pass: "epbwkloaqtfjbxxr"  // Use environment variables in production
        }
    });

    const SendData = {
        from: "tarikulislam3639@gmail.com",
        to: "tarikulislam3639@gmail.com",
        subject: req.body.select_option,
        text: `Name: ${req.body.name}\nPhone: ${req.body.phoneNumber}\nEmail: ${req.body.email}\nRequire Topic: ${req.body.select_option}\nMessage: ${req.body.massage}`
    };

    transporter.sendMail(SendData, (error, info) => {
        if (error) {
            console.log(error);
            res.status(400).json({ message: "Wrong" });
        } else {
            console.log("Email sent: " + info.response);
            res.status(200).json({ message: "Success" });
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
