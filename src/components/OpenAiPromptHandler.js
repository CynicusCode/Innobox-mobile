// src/components/OpenAiPromptHandler.js
import { generateResponse } from "../utils/openAiApi";

export const generateOpenAiResponse = async (
  email,
  context,
  personality,
  tone
) => {
  const prompt = `Using the provided context, respond to the client's email. Emulate the specified personality and tone.
  
  Client's Email:
  "${email}"
  
  Context for Response:
  ${context}
  
  Personality:
  ${personality}
  
  Tone:
  ${tone}
  
  Response:`;

  try {
    const response = await generateResponse(prompt);
    console.log(response); // Initially log the response
    return response; // You can return it if needed
  } catch (error) {
    console.error(
      "Error calling OpenAI API:",
      error.response ? error.response.data : error
    );
    return null;
  }
};
