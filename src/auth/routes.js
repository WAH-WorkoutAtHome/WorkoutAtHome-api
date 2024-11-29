const googleAuthRoutes = [
  {
    method: "GET",
    path: "/auth/google",
    options: {
      auth: "google",
      handler: async (request, h) => {
        const profile = request.auth.credentials.profile;
        return h.redirect(
          "http://localhost:8000?token=" + request.auth.credentials.token
        );
      },
    },
  },
];

module.exports = googleAuthRoutes;
