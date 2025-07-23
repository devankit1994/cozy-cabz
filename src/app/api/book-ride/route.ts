import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, serviceType, travellers, date, requirements } =
      data;

    // Basic validation
    if (!name || !email || !phone || !serviceType || !travellers || !date) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    // Setup Nodemailer transporter using SMTP credentials from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Compose email
    const mailOptions = {
      from: `"Cozy Cabz Enquiry" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECIPIENT_EMAIL,
      subject: "New Ride Booking Enquiry",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service Type: ${serviceType}
        No. of Travellers: ${travellers}
        Date: ${date}
        Requirements: ${requirements || "N/A"}
      `,
      html: `
        <h2>New Ride Booking Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>No. of Travellers:</strong> ${travellers}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Requirements:</strong> ${requirements || "N/A"}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Enquiry received and email sent." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send enquiry email. Please try again later." },
      { status: 500 }
    );
  }
}
