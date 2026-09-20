import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, organization, inquiryType, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 }
      );
    }

    // Create SMTP transporter using Gmail App Password
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // HTML email body — professional branded notification
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Inquiry — DIN Pakistan</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:30px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.10);">
          
          <!-- Header -->
          <tr>
            <td style="background:#152238;padding:28px 32px;">
              <p style="margin:0;color:#F59E0B;font-size:10px;text-transform:uppercase;letter-spacing:3px;font-weight:700;">DIN Pakistan — Executive Secretariat</p>
              <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;font-weight:800;">New Website Inquiry Received</h1>
            </td>
          </tr>

          <!-- Inquiry Type Badge -->
          <tr>
            <td style="background:#8C241D;padding:10px 32px;">
              <p style="margin:0;color:#FDE68A;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;">
                Inquiry Classification: ${inquiryType || "General Inquiry"}
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                
                <tr>
                  <td style="padding-bottom:20px;border-bottom:1px solid #e5e7eb;">
                    <h2 style="margin:0 0 16px;font-size:14px;color:#374151;text-transform:uppercase;letter-spacing:1px;">Sender Details</h2>
                    <table width="100%" cellpadding="6" cellspacing="0">
                      <tr>
                        <td style="width:140px;color:#6B7280;font-size:12px;font-weight:700;text-transform:uppercase;">Full Name</td>
                        <td style="color:#111827;font-size:13px;font-weight:600;">${name}</td>
                      </tr>
                      <tr style="background:#f9fafb;">
                        <td style="width:140px;color:#6B7280;font-size:12px;font-weight:700;text-transform:uppercase;padding:6px;">Email</td>
                        <td style="color:#1D4ED8;font-size:13px;padding:6px;"><a href="mailto:${email}" style="color:#1D4ED8;">${email}</a></td>
                      </tr>
                      ${
                        organization
                          ? `<tr>
                        <td style="width:140px;color:#6B7280;font-size:12px;font-weight:700;text-transform:uppercase;padding:6px;">Organization</td>
                        <td style="color:#111827;font-size:13px;padding:6px;">${organization}</td>
                      </tr>`
                          : ""
                      }
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding-top:20px;">
                    <h2 style="margin:0 0 10px;font-size:14px;color:#374151;text-transform:uppercase;letter-spacing:1px;">Message / Proposal Details</h2>
                    <div style="background:#F9FAFB;border-left:4px solid #8C241D;padding:16px;font-size:13px;color:#111827;line-height:1.7;border-radius:0 4px 4px 0;">
                      ${message.replace(/\n/g, "<br/>")}
                    </div>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:18px 32px;">
              <p style="margin:0;font-size:11px;color:#6B7280;">
                This notification was automatically generated from the DIN Pakistan contact form at 
                <a href="https://dinsindh.org/contact" style="color:#8C241D;">dinsindh.org/contact</a>.<br/>
                Reply directly to <strong>${email}</strong> to respond.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Send email to DIN inbox
    await transporter.sendMail({
      from: `"DIN Pakistan Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || "dinsindh@gmail.com",
      replyTo: email,
      subject: `[DIN Inquiry] ${inquiryType || "General"} — ${name}`,
      html: htmlContent,
      text: `
New inquiry from: ${name} <${email}>
Organization: ${organization || "—"}
Type: ${inquiryType}

Message:
${message}
      `.trim(),
    });

    // Also send an auto-acknowledgement to the sender
    await transporter.sendMail({
      from: `"DIN Pakistan — Executive Secretariat" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Inquiry Received — DIN Pakistan Secretariat`,
      html: `
<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;background:#f4f4f4;padding:30px 0;margin:0;">
  <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;margin:auto;border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.1);">
    <tr><td style="background:#152238;padding:24px 32px;">
      <p style="margin:0;color:#F59E0B;font-size:10px;text-transform:uppercase;letter-spacing:3px;font-weight:700;">DIN Pakistan</p>
      <h2 style="margin:6px 0 0;color:#fff;font-size:20px;">Your inquiry has been received</h2>
    </td></tr>
    <tr><td style="padding:28px 32px;font-size:13px;color:#374151;line-height:1.7;">
      <p>Dear <strong>${name}</strong>,</p>
      <p>Thank you for reaching out to <strong>DIN Pakistan Executive Secretariat</strong>. We have received your inquiry regarding <strong>${inquiryType}</strong> and it has been forwarded to the relevant desk in Shikarpur.</p>
      <p>Our team will respond within <strong>2–3 working days</strong>. For urgent matters, please call our office directly at <strong>+92-726-520-155</strong>.</p>
      <p style="margin-top:24px;padding-top:16px;border-top:1px solid #e5e7eb;font-size:11px;color:#6B7280;">
        DIN Pakistan — Station Road, Shikarpur, Sindh<br/>
        <a href="mailto:dinsindh@gmail.com" style="color:#8C241D;">dinsindh@gmail.com</a>
      </p>
    </td></tr>
  </table>
</body>
</html>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Inquiry transmitted successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact form SMTP error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later.", details: error?.message },
      { status: 500 }
    );
  }
}
