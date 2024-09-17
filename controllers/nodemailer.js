const nodemailer = require("nodemailer");

const mailer = async(req, res) =>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, 
        auth: {
          user: "krishchalregmi123@gmail.com",
          pass: process.env.password,
        },
      });

      const info = await transporter.sendMail({
        from: '"Nodemailer 👻" <Krishchal Regmi>', 
        to: "krishchalregmi123@gmail.com,itssujan167@gmail.com", 
        subject: "Testing Nodemailer smtp ✔", 
        text: "Mail testing smtp", 
        html: "<b>Mail testing ... </b>", 
      });
    
      console.log("Message sent: %s", info.messageId);
}

module.exports = { mailer };