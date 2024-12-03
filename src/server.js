require("dotenv").config();
const Hapi = require("@hapi/hapi");
const configureGoogleAuth = require("./auth/googleAuth");
const googleAuthRoutes = require("./auth/routes");
const chatBotRoutes = require("./chatbot/routes");
const calendarRoutes = require("./calendar/routes");
const calorieCalculatorRoutes = require("./calculator-calories/routes");

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  await configureGoogleAuth(server);

  server.route(googleAuthRoutes);

  server.route(chatBotRoutes);

  server.route(calorieCalculatorRoutes);

  server.route(calendarRoutes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.error(err);
  process.exit(1);
});

init();
