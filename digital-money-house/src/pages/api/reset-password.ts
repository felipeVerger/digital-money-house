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
      subject: "Restablecimiento de contraseña",
      html: `
        <p>Hola,</p>
        <p>Recibimos una solicitud para restablecer tu contraseña. Haz clic en el siguiente enlace para continuar:</p>
        <a href="${process.env.NEXTAUTH_URL}/reset-password?email=${req.body.email}&token=${req.body.token}">Restablecer contraseña</a>
      `,
      mailSettings: {
        sandboxMode: {
          enable: true,
        },
      },
    });
  } catch (error: any) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
}
