const { calculateCalories } = require("./service");

const calorieCalculatorRoutes = [
  {
    method: "POST",
    path: "/calculator/calories",
    handler: async (request, h) => {
      const { weight, activityLevel, dietGoal } = request.payload;

      try {
        const result = await calculateCalories(weight, activityLevel, dietGoal);

        return h
          .response({
            status: "success",
            data: result,
          })
          .code(200);
      } catch (error) {
        console.error(error.message);
        return h
          .response({
            status: "fail",
            message: error.message,
          })
          .code(400);
      }
    },
  },
];

module.exports = calorieCalculatorRoutes;
