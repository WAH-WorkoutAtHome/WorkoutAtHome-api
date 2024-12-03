const Bell = require("@hapi/bell");

const configureGoogleAuth = async (server) => {
  // Registrasi plugin Bell
  await server.register(Bell);

  // Konfigurasi strategi Google OAuth
  server.auth.strategy("google", "bell", {
    provider: "google",
    password: "cookie_encryption_password_secure",
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    isSecure: false,
    location: process.env.AUTHORIZATION_URL,
  });

  console.log("Google OAuth strategy configured");
};

module.exports = configureGoogleAuth;
