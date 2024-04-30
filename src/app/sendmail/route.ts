const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');
export async function POST(request: Request) {
  const { to, subject, text, html } = await request.json();

  const msg = {
    to,
    from: process.env.SENDGRID_EMAIL, // Ensure this is a verified sender in SendGrid
    subject,
    html,
  };
    sgMail.send(msg)
    .then(() => {
      console.log('Email sent successfully');
    })
    .catch((error: any) => {
      console.error(error);
    });
  console.log(msg)
  return Response.json(msg)
}