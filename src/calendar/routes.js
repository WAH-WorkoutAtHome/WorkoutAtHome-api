const { getAuthUrl, getAccessToken, listEvents } = require("./service");
const { generateCalendar } = require("./controller");

const routes = [
  {
    method: "GET",
    path: "/calendar/auth",
    handler: async (request, h) => {
      try {
        const authUrl = await getAuthUrl();
        return h.response({ url: authUrl }).code(200);
      } catch (err) {
        return h.response({ error: err.message }).code(500);
      }
    },
  },
  {
    method: "GET",
    path: "/calendar/oauth2callback",
    handler: async (request, h) => {
      try {
        const code = request.query.code;
        if (!code) throw new Error("Authorization code not found");

        // Retrieve tokens using the authorization code
        const tokens = await getAccessToken(code);

        // Redirect to frontend with the access token in the URL hash
        return h.redirect(
          `http://localhost:8000/#/kalendar?access_token=${tokens.access_token}`
        );
      } catch (err) {
        console.error("Error in /calendar/oauth2callback:", err.message);
        return h.response({ error: err.message }).code(500);
      }
    },
  },
  {
    method: "GET",
    path: "/calendar/events",
    handler: async (request, h) => {
      try {
        const events = await listEvents();
        return h.response(events).code(200);
      } catch (err) {
        return h.response({ error: err.message }).code(500);
      }
    },
  },
  {
    method: "POST",
    path: "/calendar/generate",
    handler: generateCalendar,
  },
];

module.exports = routes;
