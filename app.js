
const express = require("express");
const PORT = process.env.PORT || 5001;
const mailer = require("./routes/nodemailer");

const app = express();

app.get("/", (req,res)=>{
    res.send("testing");
});

app.use("/api/nodemailer",mailer);

const start = async() =>{
    try {
        app.listen(PORT, ()=>{
            console.log(`Listening to port : ${PORT}`);
        });
        
    } catch (error) {
        console.log(error);
    }
}
start();

