import sendPasswordResetEmail from "@/services/reset-password/reset-password.service";
import { NextApiRequest, NextApiResponse } from "next";
const crypto = require("crypto");

function generateResetToken() {
  return crypto.randomBytes(32).toString("hex");
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;
  const resetToken = generateResetToken();

  try {
    await sendPasswordResetEmail(email, resetToken);
    return res.status(200).json({ error: "" });
  } catch (error: any) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}
