import { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await sendgrid.send({
      to: req.body.email,
      from: "registro.dmh.equipo9@gmail.com",
      subject: "Confimación de registro - Digital Money House",
      html: `
        <div>
          <h1>Verify your email</h1>
          <p>Your verification code is: ${req.body.code}</p>
        </div>
      `,
      // mailSettings: {
      //   sandboxMode: {
      //     enable: true,
      //   },
      // },
    });
  } catch (error: any) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
}
