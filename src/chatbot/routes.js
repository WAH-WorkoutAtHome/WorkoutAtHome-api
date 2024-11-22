const generateChatResponse = require("./gemini");

const routes = [
  {
    method: "POST",
    path: "/chatbot",
    handler: async (request, h) => {
      const { prompt } = request.payload;

      if (!prompt) {
        return h.response({ error: "Prompt is required" }).code(400);
      }

      try {
        const response = await generateChatResponse(prompt);
        return h.response({ response }).code(200);
      } catch (error) {
        return h
          .response({ error: "Failed to generate chatbot response" })
          .code(500);
      }
    },
  },
];

module.exports = routes;
