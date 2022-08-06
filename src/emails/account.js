const nodemailer = require("nodemailer");

require("dotenv").config();
let transport = nodemailer.createTransport({
  host: process.env.API_EMAIL_HOST,
  port: process.env.API_PORT,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

const sendWelcomeEmail = (email, name) => {
  const mailOptions = {
    from: "pirir19465@aregods.com",
    to: email,
    subject: "Testing",
    text: `Welcome to the app ${name} ,name .Let me know how you get along with the app`,
  };

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent" + info.messageId);
    }
  });
};

// const mailOptions = {
//   from: "nebaj52857@galotv.com",
//   to: "nebaj52857@galotv.com",
//   subject: "Testing",
//   text: "Gello there",
// };
// transport.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent" + info.messageId);
//   }
// });

module.exports = {
  sendWelcomeEmail,
};
