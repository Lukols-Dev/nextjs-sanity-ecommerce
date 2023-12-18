import { resend } from "@/lib/resend";
import { EmailPyload } from "@/types/email";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const body = await request.json();
  const { data } = body;

  const email: EmailPyload = data;

  try {
    const { data, error } = await resend.emails.send(email);

    if (error) {
      return NextResponse.json(error, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
};
