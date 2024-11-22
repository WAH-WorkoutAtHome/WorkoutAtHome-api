# **WorkoutAtHome API Documentation**

## **Overview**

WorkoutAtHome API menyediakan berbagai layanan seperti Chatbot, autentikasi Google OAuth, dan kalkulator kalori untuk mendukung aplikasi kesehatan Anda. API ini dirancang untuk mudah digunakan oleh pengembang frontend.

---

## **API Endpoints**

### 1. **Gemini Chatbot**

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

### 2. **Google OAuth**

- **URL**: `http://localhost:3000/auth/google`
- **Method**: `GET`
- **Description**: Endpoint untuk autentikasi menggunakan akun Google. Setelah pengguna masuk, Anda akan menerima token autentikasi untuk keperluan API selanjutnya.

#### **Usage**

1. Arahkan pengguna ke URL ini untuk login Google.
2. Setelah login, pengguna akan diarahkan kembali ke aplikasi Anda dengan token akses.

---

### 3. **Calculator Calories**

- **URL**: `http://localhost:3000/calculator/calories`
- **Method**: `POST`
- **Description**: Endpoint untuk menghitung kebutuhan kalori, protein, dan gula harian berdasarkan berat badan, tingkat aktivitas, dan tujuan diet pengguna. Hasilnya juga disertai rekomendasi makanan yang dihasilkan oleh Gemini AI.

#### **Request Parameters**

| Parameter       | Type   | Description                                                                                                      |
| --------------- | ------ | ---------------------------------------------------------------------------------------------------------------- |
| `weight`        | Number | Berat badan pengguna dalam kilogram.                                                                             |
| `activityLevel` | String | Tingkat aktivitas: `ringan`, `sedang`, `berat`, `atlet`.                                                         |
| `dietGoal`      | String | Tujuan diet: `turunkan berat badan`, `naikkan berat badan`, `menaikkan masa otot`, `mempertahankan berat badan`. |

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
    "foodRecommendations": "Sarapan: Oatmeal dengan pisang dan madu... (lanjutan)"
  }
}
```

---

## **Setup and Run**

### **1. Install Dependencies**

```bash
npm install
```

### **2. Create `.env` File**

Tambahkan konfigurasi berikut ke dalam file `.env`:

```
GEMINI_API_KEY=your-gemini-api-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### **3. Run Server**

```bash
npm start
```

---

## **Error Handling**

- Semua endpoint API akan mengembalikan respons dengan format berikut jika terjadi kesalahan:

```json
{
  "status": "fail",
  "message": "Deskripsi kesalahan"
}
```

---

## **Contact**

Jika Anda memiliki pertanyaan atau masalah, silakan hubungi:

- **Developer**: [Nama Anda]
- **Email**: [Email Anda]
- **GitHub**: [GitHub Repo Anda]

---

Selamat menggunakan API WorkoutAtHome! 🚀
