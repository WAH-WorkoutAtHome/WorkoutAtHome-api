const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const SCOPES = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/tasks",
];
const TOKEN_PATH = path.join(__dirname, "token.json");

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

async function getAuthUrl() {
  return oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
}

async function saveToken(tokens) {
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
  console.log("Token stored to", TOKEN_PATH);
}

async function getAccessToken(code) {
  const { tokens } = await oAuth2Client.getToken(code);
  await saveToken(tokens);
  return tokens;
}

function getOAuthClient(googleAuth) {
  oAuth2Client.setCredentials(googleAuth);
  return oAuth2Client;
}

async function listEvents() {
  const calendar = google.calendar({ version: "v3", auth: oAuth2Client });
  const res = await calendar.events.list({
    calendarId: "primary",
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: "startTime",
  });

  return res.data.items || [];
}

async function addEventsToGoogleCalendar(authClient, schedule) {
  const calendar = google.calendar({ version: "v3", auth: authClient });

  try {
    return await Promise.all(
      schedule.map((workout) =>
        calendar.events.insert({
          calendarId: "primary",
          resource: {
            summary: workout.title,
            description: workout.activities
              .map(
                (activity) =>
                  `<h3>${activity.name}</h3>` +
                  `<p><strong>Deskripsi:</strong> ${activity.description}</p>` +
                  `<p><strong>Repetisi/Durasi:</strong> ${activity.repetitions || activity.duration}</p>` +
                  `<p><strong>Video:</strong> <a href="${activity.videoUrl}">Tonton di sini</a>`
              )
              .join("<br><br>"),
            start: {
              dateTime: new Date(workout.date + "T04:30:00"),
              timeZone: "Asia/Jakarta",
            },
            end: {
              dateTime: new Date(workout.date + "T22:00:00"),
              timeZone: "Asia/Jakarta",
            },
          },
        })
      )
    );
  } catch (error) {
    console.error("Error adding events:", error);
    throw error;
  }
}

async function addTasksToGoogleTasks(authClient, schedule) {
  const tasks = google.tasks({ version: "v1", auth: authClient });

  try {
    return await Promise.all(
      schedule.map((workout) =>
        tasks.tasks.insert({
          tasklist: "@default",
          requestBody: {
            title: `Lakukan ${workout.title}`,
            notes: `Pengingat untuk melakukan: ${workout.title} pada hari ini.`,
            due: new Date(workout.date).toISOString(),
          },
        })
      )
    );
  } catch (error) {
    console.error("Error adding tasks:", error);
    throw error;
  }
}

module.exports = {
  getAuthUrl,
  getAccessToken,
  listEvents,
  saveToken,
  addEventsToGoogleCalendar,
  addTasksToGoogleTasks,
  getOAuthClient,
};
