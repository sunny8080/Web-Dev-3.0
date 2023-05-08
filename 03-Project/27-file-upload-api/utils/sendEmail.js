const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // send mail
    const info = await transporter.sendMail({
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: options.email,
      subject: options.subject,
      html: `<h2>Hi, New file uploaded on fileUpload app</h2>
      <p>View uploaded file : <a href='${options.fileUrl}' >${options.fileUrl}</a></p>
      <br/>
      <br/>
      <p>Thanks for Uploading !</p>`,
    });
  } catch (err) {
    // console.log(err.message);
    console.log('Error occurred in sending email');
  }
};

module.exports = sendEmail;
