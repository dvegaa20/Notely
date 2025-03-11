import { generateImagePrompt } from "@/lib/openai";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userId } = await auth();
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await request.json();
  const { name } = body;
  console.log({ name });
  const image_description = await generateImagePrompt(name);
  console.log({ image_description });
  return new NextResponse("ok");
}
