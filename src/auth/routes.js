const googleAuthRoutes = [
  {
    method: "GET",
    path: "/auth/google",
    options: {
      auth: "google",
      handler: async (request, h) => {
        const profile = request.auth.credentials.profile;

        console.log(profile);

        const profileData = encodeURIComponent(
          JSON.stringify({
            name: profile.displayName,
            email: profile.email,
          })
        );

        return h.redirect(
          `${process.env.APP_URL}?token=${request.auth.credentials.token}&profile=${profileData}`
        );
      },
    },
  },
];

module.exports = googleAuthRoutes;
