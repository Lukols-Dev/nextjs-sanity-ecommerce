import { EmailPyload } from "@/types/email";
import { Resend } from "resend";

export const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const createEmailObj = (data: EmailPyload) => {
  return {
    from: data.from,
    to: data.to,
    subject: data.subject,
    react: data.react,
    text: data.text || "",
  };
};
