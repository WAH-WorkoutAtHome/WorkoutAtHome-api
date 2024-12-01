const {
  getOAuthClient,
  addEventsToGoogleCalendar,
  addTasksToGoogleTasks,
} = require("./service");
const workoutPlans = require("./workoutPlans");

// Fungsi untuk mengenerate jadwal selama 7 hari
function generateSchedule(target, startDate) {
  if (!workoutPlans[target]) {
    throw new Error("Invalid target"); // Validasi target
  }

  const startDateObj = new Date(startDate); // Konversi tanggal awal
  return workoutPlans[target].map((workout, index) => {
    const workoutDate = new Date(startDateObj); // Tanggal awal
    workoutDate.setDate(workoutDate.getDate() + index); // Tambah hari sesuai indeks

    return {
      date: workoutDate.toISOString().split("T")[0], // Format tanggal
      title: workout.title,
      activities: workout.activities,
    };
  });
}

// Handler utama untuk route
async function generateCalendar(req, h) {
  try {
    const { target, startDate, googleAuth } = req.payload;

    // Validasi input dari pengguna
    if (!target || !startDate || !googleAuth) {
      throw new Error("Target, startDate, and googleAuth are required");
    }

    // Generate jadwal latihan selama 1 minggu
    const schedule = generateSchedule(target, startDate);

    // Autentikasi Google OAuth2
    const authClient = getOAuthClient(googleAuth);

    // Tambahkan jadwal ke Google Calendar
    const calendarResponse = await addEventsToGoogleCalendar(
      authClient,
      schedule
    );

    // Tambahkan jadwal ke Google Tasks
    const tasksResponse = await addTasksToGoogleTasks(authClient, schedule);

    return h
      .response({
        message: "Schedule created and added to Google Calendar and Tasks",
        schedule,
        googleCalendarResponse: calendarResponse,
        googleTasksResponse: tasksResponse,
      })
      .code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
}

module.exports = {
  generateCalendar,
};
