require("dotenv").config();
const Hapi = require("@hapi/hapi");
const configureGoogleAuth = require("./auth/googleAuth");
const googleAuthRoutes = require("./auth/routes");
const chatBotRoutes = require("./chatbot/routes");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  // Konfigurasi Google OAuth
  await configureGoogleAuth(server);

  // Tambahkan route Google OAuth
  server.route(googleAuthRoutes);

  // Tambahkan route Chatbot
  server.route(chatBotRoutes);

  // Jalankan server
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

// Tangani error global
process.on("unhandledRejection", (err) => {
  console.error(err);
  process.exit(1);
});

init();
