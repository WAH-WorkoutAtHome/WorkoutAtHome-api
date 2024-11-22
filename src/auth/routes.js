const googleAuthRoutes = [
  {
    method: "GET",
    path: "/auth/google",
    options: {
      auth: "google",
      handler: async (request, h) => {
        const profile = request.auth.credentials.profile;

        return h
          .response({
            message: "Login successful",
            token: request.auth.credentials.token,
            user: {
              id: profile.id,
              displayName: profile.displayName,
              email: profile.email,
            },
          })
          .code(200);
      },
    },
  },
];

module.exports = googleAuthRoutes;
