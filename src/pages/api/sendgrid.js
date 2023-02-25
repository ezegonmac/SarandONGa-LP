import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "isppgrupo12@gmail.com", // Your email where you'll receive emails
      from: "isppgrupo12@gmail.com", // your website email address here
      subject: `[Lead from website] : ${req.body.subject}`,
      html: `<div>You've got an email from ${req.body.name}</div>
             <div>Email: ${req.body.email}</div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;