const express = require("express");
const router = express.Router();

const { mailer } = require("../controllers/nodemailer");
router.route("/sendemail").get(mailer);

module.exports = router;