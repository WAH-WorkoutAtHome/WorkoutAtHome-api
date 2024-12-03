const {
  getOAuthClient,
  addEventsToGoogleCalendar,
  addTasksToGoogleTasks,
} = require("./service");
const workoutPlans = require("./workoutPlans");

function generateSchedule(target, startDate) {
  if (!workoutPlans[target]) {
    throw new Error("Invalid target");
  }

  const startDateObj = new Date(startDate);
  return workoutPlans[target].map((workout, index) => {
    const workoutDate = new Date(startDateObj);
    workoutDate.setDate(workoutDate.getDate() + index);

    return {
      date: workoutDate.toISOString().split("T")[0],
      title: workout.title,
      activities: workout.activities,
    };
  });
}

async function generateCalendar(req, h) {
  try {
    const { target, startDate, googleAuth } = req.payload;

    if (!target || !startDate || !googleAuth) {
      throw new Error("Target, startDate, and googleAuth are required");
    }

    const schedule = generateSchedule(target, startDate);

    const authClient = getOAuthClient(googleAuth);

    const calendarResponse = await addEventsToGoogleCalendar(
      authClient,
      schedule
    );

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
