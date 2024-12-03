const Bell = require("@hapi/bell");

const configureGoogleAuth = async (server) => {
  await server.register(Bell);

  server.auth.strategy("google", "bell", {
    provider: "google",
    password: "cookie_encryption_password_secure",
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    isSecure: process.env.AUTH_SECURE === "true",
    location: process.env.AUTHORIZATION_URL,
  });

  console.log("Google OAuth strategy configured");
};

module.exports = configureGoogleAuth;
