const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  //   service: "gmail",
  port: 25,
  secure: false,
  auth: {
    user: "ocean.viewjob2023@gmail.com",
    pass: "acuyfcwbrpfmdleb",
  },
});

transporter.verify().then(() => {
  console.log("Ready for emails");
});

module.exports = {
  transporter,
};
