## **WorkoutAtHome API Documentation**

## **Overview**
WorkoutAtHome API menyediakan berbagai layanan untuk mendukung aplikasi kesehatan Anda, termasuk Chatbot, autentikasi Google OAuth, kalkulator kalori, dan pengelolaan kalender. API ini dirancang untuk mudah digunakan oleh pengembang frontend.

---

## **API Endpoints**

### 1. **Google OAuth**
- **URL**: `http://localhost:3000/auth/google`
- **Method**: `GET`
- **Description**: Endpoint untuk autentikasi menggunakan akun Google. Setelah pengguna masuk, Anda akan menerima token autentikasi untuk keperluan API selanjutnya.

#### **Usage**
1. Arahkan pengguna ke URL ini untuk login Google.
2. Setelah login, pengguna akan diarahkan kembali ke aplikasi Anda dengan token akses.

#### **Response Example**
```json
{
  "status": "success",
  "data": {
    "token": "your_access_token",
    "profile": {
      "name": "User Name",
      "email": "user@example.com"
    }
  }
}
```

---

### 2. **Calculator Calories**
- **URL**: `http://localhost:3000/calculator/calories`
- **Method**: `POST`
- **Description**: Endpoint untuk menghitung kebutuhan kalori, protein, dan gula harian berdasarkan berat badan, tingkat aktivitas, dan tujuan diet pengguna. Hasilnya juga disertai rekomendasi makanan yang dihasilkan oleh Gemini AI.

#### **Request Parameters**
| Parameter     | Type   | Description                                                                 |
|---------------|--------|-----------------------------------------------------------------------------|
| `weight`      | Number | Berat badan pengguna dalam kilogram.                                       |
| `activityLevel` | String | Tingkat aktivitas: ringan, sedang, berat, atlet.                         |
| `dietGoal`    | String | Tujuan diet: turunkan berat badan, naikkan berat badan, menaikkan masa otot, mempertahankan berat badan. |

#### **Request Example**
```json
{
  "weight": 70,
  "activityLevel": "sedang",
  "dietGoal": "menaikkan masa otot"
}
```

#### **Response Example**
```json
{
  "status": "success",
  "data": {
    "calories": 2450,
    "protein": 112,
    "sugar": 61,
    "foodRecommendations": "Sarapan: Oatmeal dengan pisang dan madu..."
  }
}
```

---

### 3. **Calendar Management**

#### **a. Generate Calendar**
- **URL**: `http://localhost:3000/calendar/generate`
- **Method**: `POST`
- **Description**: Endpoint untuk menghasilkan jadwal latihan selama 7 hari berdasarkan target dan tanggal mulai. Jadwal ini akan ditambahkan ke Google Calendar dan Google Tasks.

#### **Request Parameters**
| Parameter     | Type   | Description                                                                 |
|---------------|--------|-----------------------------------------------------------------------------|
| `target`      | String | Target latihan: weight_loss, core_strength, muscle_building, maintenance.  |
| `startDate`   | String | Tanggal mulai dalam format YYYY-MM-DD.                                      |
| `googleAuth`  | Object | Token autentikasi Google yang didapat dari proses login OAuth.              |

#### **Request Example**
```json
{
  "target": "weight_loss",
  "startDate": "2023-10-01",
  "googleAuth": {
    "access_token": "your_access_token"
  }
}
```

#### **Response Example**
```json
{
  "message": "Schedule created and added to Google Calendar and Tasks",
  "schedule": [
    {
      "date": "2023-10-01",
      "title": "Upper Body & Cardio",
      "activities": ["Push-ups", "Running"]
    }
  ],
  "googleCalendarResponse": { ... },
  "googleTasksResponse": { ... }
}
```

#### **b. List Events**
- **URL**: `http://localhost:3000/calendar/events`
- **Method**: `GET`
- **Description**: Endpoint untuk mendapatkan daftar acara dari Google Calendar pengguna.

#### **Response Example**
```json
{
  "status": "success",
  "data": [
    {
      "id": "event_id",
      "summary": "Workout Session",
      "start": {
        "dateTime": "2023-10-01T10:00:00",
        "timeZone": "Asia/Jakarta"
      },
      "end": {
        "dateTime": "2023-10-01T11:00:00",
        "timeZone": "Asia/Jakarta"
      }
    }
  ]
}
```

---

### 4. **Gemini Chatbot**
- **URL**: `http://localhost:3000/chatbot`
- **Method**: `POST`
- **Description**: Endpoint untuk berinteraksi dengan Chatbot Gemini. Chatbot ini mampu menjawab pertanyaan dan memberikan saran yang relevan sesuai dengan kebutuhan pengguna.

#### **Request Example**
```json
{
  "message": "Apa tips olahraga untuk pemula?"
}
```

#### **Response Example**
```json
{
  "status": "success",
  "data": {
    "reply": "Mulailah dengan latihan ringan seperti berjalan selama 30 menit setiap hari. Konsistensi adalah kunci."
  }
}
```

---

## **Setup and Run**

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Create `.env` File**
   Tambahkan konfigurasi berikut ke dalam file `.env`:
   ```
   GEMINI_API_KEY=your-gemini-api-key
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

3. **Run Server**
   ```bash
   npm start
   ```

---

## **Error Handling**
Semua endpoint API akan mengembalikan respons dengan format berikut jika terjadi kesalahan:
```json
{
  "status": "fail",
  "message": "Deskripsi kesalahan"
}
```
**Selamat menggunakan API WorkoutAtHome! 🚀**
