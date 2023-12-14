// src/utils/openAiApi.js
import axios from "axios";

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
          Authorization: `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`, // Replace with your API key
        },
      }
    );
    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return null; // Handle error appropriately
  }
};
