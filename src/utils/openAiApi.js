import axios from "axios";
import { OPENAI_API_KEY } from "@env";

const OPENAI_API_URL =
  "https://api.openai.com/v1/engines/davinci-codex/completions";

export const generateResponse = async (prompt) => {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      { prompt: prompt, max_tokens: 350 },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return null;
  }
};
