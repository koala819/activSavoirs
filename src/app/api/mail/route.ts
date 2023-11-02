import nodemailer from "nodemailer";
import { mailContact } from "@/src/lib/mail";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<Response> {
  if (!req.body)
    return NextResponse.json({
      status: 403,
      statusText: "Don't have form data...!",
    });

  const email = process.env.MAIL_USER;
  const pass = process.env.MAIL_PWD;
  const host = process.env.MAIL_HOST;
  const port = process.env.MAIL_PORT;

  const body = await req.json();
  if (!email || !pass || !host || !port) {
    return NextResponse.json({
      status: 405,
      statusText: "One or more required environment variables are not set.",
    });
  } else {
    const transporter = nodemailer.createTransport({
      host: host,
      port: parseInt(port),
      secure: true,
      auth: {
        user: email,
        pass,
      },
      tls: { rejectUnauthorized: false },
    });
    const mailOptions = {
      from: "contact@activ-savoirs.com",
      to: "contact@activ-savoirs.com",
      subject: `📧 ${body.prenom} ${body.nom} nous a écrit`,
      text: `Message: ${body.message}.<br> Société ${body.societe}<br> Téléphone ${body.telephone}<br> Adresse mail ${body.email} pour répondre.`,
      html: mailContact(
        body.prenom,
        body.nom,
        body.message,
        body.societe,
        body.telephone,
        body.email
      ),
    };
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      status: 200,
      statusText: "Send the email with success",
    });
  }
}
