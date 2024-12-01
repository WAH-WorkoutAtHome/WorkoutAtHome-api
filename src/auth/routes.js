const googleAuthRoutes = [
  {
    method: "GET",
    path: "/auth/google",
    options: {
      auth: "google",
      handler: async (request, h) => {
        // Get the user's profile from the credentials
        const profile = request.auth.credentials.profile;

        // Log the profile to verify
        console.log(profile);

        // Serialize the profile data and encode it for use in the URL
        const profileData = encodeURIComponent(
          JSON.stringify({
            name: profile.displayName,
            email: profile.email,
          })
        );

        // Redirect to frontend with token and profile data
        return h.redirect(
          `http://localhost:8000?token=${request.auth.credentials.token}&profile=${profileData}`
        );
      },
    },
  },
];

module.exports = googleAuthRoutes;
