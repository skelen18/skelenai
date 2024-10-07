// src/pages/api/openai.js
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { prompt } = req.body;

    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        max_tokens: 150,
      });

      const message = response.data.choices[0].text.trim();
      res.status(200).json({ message });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
