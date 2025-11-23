// nodemailer.config.js
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,       // your Gmail
    pass: process.env.MAIL_PASS,       // your Gmail App Password
  },
});

export const mailOptions = {
  from: process.env.MAIL_USER,
};
