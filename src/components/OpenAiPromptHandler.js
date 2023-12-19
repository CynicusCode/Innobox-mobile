// src/components/OpenAiPromptHandler.js
import { generateResponse } from "../utils/openAiApi";

export const generateOpenAiResponse = async (
  emailContent,
  context,
  personality,
  toneDescription // Use a parameter like 'toneDescription'
) => {
  const prompt = `Using the provided context, respond to the client's email. Emulate the specified personality and tone.
  
  Client's Email:
  "${emailContent}" // Use 'emailContent' here
  
  Context for Response:
  ${context}
  
  Personality:
  ${personality}
  
  Tone:
  ${toneDescription} // Use 'toneDescription' here
  
  Response:`;

  try {
    const response = await generateResponse(prompt);
    console.log("Response from OpenAI:", response);
    return response;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return null;
  }
};
