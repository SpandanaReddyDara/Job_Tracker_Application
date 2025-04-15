const mongoose = require("mongoose");
const Job = require("../models/Job"); // adjust path to your Job model
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const sendInterviewReminders = async () => {
  try {
    await mongoose.connect(process.env.WEBSITE_DB);
    console.log("MongoDB Connected");

    const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
    const jobs = await Job.find({ endDate: today });

    if (jobs.length === 0) {
      console.log("No interviews today.");
      return;
    }

    // Looking to send emails in production? Check out our Email API/SMTP product!
    // Looking to send emails in production? Check out our Email API/SMTP product!
    var transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "486079ed4b7580",
        pass: "67cfed307934fa",
      },
    });

    if (jobs.length > 0) {
      let jobDetails = jobs
        .map((job) => {
          return `• ${job.title}\n  Link: ${job.link}\n`;
        })
        .join("\n");

      const mailOptions = {
        from: "jobtracker@gmail.com",
        to: "spandanareddydara@gmail.com",
        subject: "Interview Reminders for Today",
        text: `You have the following interviews scheduled for today:\n\n${jobDetails}`,
      };

      await transporter.sendMail(mailOptions);
      console.log("All job interview reminders sent in one email.");
    } else {
      console.log("No interviews scheduled for today.");
    }
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await mongoose.disconnect();
  }
};

sendInterviewReminders();
