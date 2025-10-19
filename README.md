# HNG Backend Stage 0 Task

## Overview
This project implements the **Stage 0 backend task** for the [HNG Internship](https://hng.tech).  
It provides a single endpoint `/me` that returns personal information, the current UTC time, and a random cat fact fetched from the Cat Facts API.

---

## Endpoint

### `GET /me`

**Example Response:**
```json
{
  "status": "success",
  "user": {
    "email": "owolabiidris4@gmail.com",
    "name": "Owolabi Idris Yusuf",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-19T01:37:50.836Z",
  "fact": "Many Egyptians worshipped the goddess Bast, who had a woman’s body and a cat’s head."
}





How to Run Locally

git clone https://github.com/Owolabi5541/hng-backend-stage0.git

cd hng-backend-stage0


Install Dependencies
npm install

Create .env File and add
PORT=8000


Start the Server
npm start

Server runs at:
http://localhost:8000/me

j

Technologies Used
Node.js
Express.js
Axios
Morgan
CORS
express-rate-limit
dotenv