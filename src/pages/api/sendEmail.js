// pages/api/sendEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, phone, address } = req.body;

      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        // Configure your email service
        service: "Gmail",
        auth: {
          user: "famawan5154@gmail.com",
          pass: "gyvt mjbd cvvb vuxc",
        },
      });

      // Send email
      const info = await transporter.sendMail({
        from: "famawan5154@gmail.com",
        to: "famawan5154@gmail.com",
        subject: "New Subscription",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}`,
      });

      console.log("Email sent:", info.response);

      // Send a response indicating success
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      // Send a response indicating failure
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    // Return a method not allowed error for non-POST requests
    res.status(405).json({ error: "Method not allowed" });
  }
}
