// src/pages/api/dalle.js
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { prompt } = req.body;

    try {
      const response = await openai.createImage({
        prompt,
        n: 1,
        size: "1024x1024",
      });

      const imageUrl = response.data.data[0].url;
      res.status(200).json({ imageUrl });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
