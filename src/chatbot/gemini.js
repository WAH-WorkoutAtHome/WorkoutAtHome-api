const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const showdown = require("showdown");

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateChatResponse = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const converter = new showdown.Converter();
    const textHtml = converter.makeHtml(text);

    return textHtml;
  } catch (error) {
    console.error("Error generating chatbot response:", error);
    throw new Error("Failed to fetch chatbot response");
  }
};

module.exports = generateChatResponse;
