import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);
console.log("API Key:", process.env.OPENAI_API_KEY);
export async function generateImagePrompt(name: string) {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a creative and helpful AI assistant capable of generating interesting thumbnail descrptions for my notes. Your output will be fed to the DALL-E model to generate a thumbnail image. The description shoudl be minimalistic and flat styled",
        },
        {
          role: "user",
          content: `Please generate a thumbnail description for my notebook title: ${name} `,
        },
      ],
    });

    const data = await response.json();
    console.log(data);
    const image_description = data.choices[0].message.content;
    return image_description as string;
  } catch (error) {
    throw error;
  }
}

export async function generateImage() {}
