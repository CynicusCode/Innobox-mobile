// src/utils/openAiApi.js
import axios from "axios";
import { OPENAI_API_KEY } from "@env";

export const generateResponse = async (email, context, personality, tone) => {
  console.log(email, context, personality, tone);
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are an email assistant. Your task is to draft a response to a client's email, using internal knowledge about a situation without explicitly stating that knowledge to the user. The response should be proactive and should reflect the given personality and tone.",
          },
          {
            role: "user",
            content: `${email}`,
          },
          {
            role: "user",
            content: `As an assistant, you know that ${context}. Now, draft a response with the personality: ${personality}, and tone: ${tone}.`,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    console.log("OpenAI API response:", response);
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(
      "Error calling OpenAI API:",
      error.response ? error.response.data : error
    );
    return null;
  }
};
