const path = require("path");
const express = require("express");

const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
app.use(cors());
const buildPath = path.join(__dirname, "..", "build");
app.use(express.json());
app.use(express.static(buildPath));

app.post("/users", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "1257363alamgir@gmail.com",
      pass: "a01537082561k",
    },
  });

  var mailOptions = {
    from: "1257363alamgir@gmail.com", // sender address
    to: req.body.to, // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.description,
    html: `
        <div style="padding:10px;border-style: ridge">
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Email: ${req.body.to}</li>
            <li>Subject: ${req.body.subject}</li>
            <li>Message: ${req.body.description}</li>
        </ul>
        `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.json({ status: true, respMesg: "Email Sent Successfully" });
    } else {
      res.json({ status: true, respMesg: "Email Sent Successfully" });
    }
  });
});

// listen to the port
app.listen(5000, () => {
  console.log("server start on port 3030");
});
