const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const calculateCalories = async (weight, activityLevel, dietGoal) => {
  const activityFactors = {
    ringan: 1.2,
    sedang: 1.55,
    berat: 1.75,
    atlet: 2.0,
  };

  const goalFactors = {
    "turunkan berat badan": -500,
    "naikkan berat badan": 500,
    "menaikkan masa otot": 300,
    "mempertahankan berat badan": 1,
  };

  if (!activityFactors[activityLevel]) {
    throw new Error("Level aktivitas tidak valid.");
  }

  if (!goalFactors[dietGoal]) {
    throw new Error("Tujuan diet tidak valid.");
  }

  const bmr = 10 * weight + 6.25 * 170 - 5 * 25 + 5;
  const dailyCalories =
    bmr * activityFactors[activityLevel] + goalFactors[dietGoal];

  const dailyProtein = weight * 1.6;
  const sugarTolerance = (dailyCalories * 0.1) / 4;

  const prompt = `
    Saya memiliki data berikut:
    - Kalori harian: ${Math.round(dailyCalories)} kkal
    - Protein harian: ${Math.round(dailyProtein)} gram
    - Gula harian: ${Math.round(sugarTolerance)} gram
    Tolong buatkan rekomendasi makanan harian yang mencakup sarapan, makan siang, dan makan malam, 
    dengan proporsi yang sesuai untuk kebutuhan kalori, protein, dan gula ini. Buatlah secara singkat dan jelas.
    buatlah dalam bahasa html, mulai dari <h1> sampai <p>. biar rapi dan tidak boleh ada <h2>. ingat bahwa makanan harus yang sederhana dan mudah didapat.
  `;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);

    return {
      calories: Math.round(dailyCalories),
      protein: Math.round(dailyProtein),
      sugar: Math.round(sugarTolerance),
      foodRecommendations: result.response.text(),
    };
  } catch (error) {
    console.error("Error interacting with Gemini API:", error.message);
    throw new Error("Gagal mendapatkan rekomendasi makanan.");
  }
};

module.exports = { calculateCalories };
