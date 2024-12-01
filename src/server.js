require("dotenv").config();
const Hapi = require("@hapi/hapi");
const configureGoogleAuth = require("./auth/googleAuth");
const googleAuthRoutes = require("./auth/routes");
const chatBotRoutes = require("./chatbot/routes");
const calendarRoutes = require("./calendar/routes");
const calorieCalculatorRoutes = require("./calculator-calories/routes");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"], // Atur domain spesifik jika memungkinkan
      },
    },
  });

  // Konfigurasi Google OAuth
  await configureGoogleAuth(server);

  // Tambahkan route Google OAuth
  server.route(googleAuthRoutes);

  // Tambahkan route Chatbot
  server.route(chatBotRoutes);

  // Tambahkan rute kalkulator kalori
  server.route(calorieCalculatorRoutes);

  // Tambahkan rute kalender
  server.route(calendarRoutes);

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
