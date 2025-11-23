import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sendmail", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "YOUR_EMAIL@gmail.com",
        pass: "YOUR_APP_PASSWORD",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "YOUR_EMAIL@gmail.com",
      subject: "New Booking Inquiry",
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `
    });

    res.json({ success: true });
  } catch (e) {
    res.json({ success: false, error: e });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
