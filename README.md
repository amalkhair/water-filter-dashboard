

```markdown
# 💧 Water Monitoring System – Python API Backend

This is the backend API for the Water Quality Monitoring System. It receives sensor data (TDS, temperature, and cycle logs) from a microcontroller (e.g., ESP32) and stores it in a PostgreSQL database. The backend is built with **FastAPI** and is designed for real-time communication and data logging.

---

## ⚙️ Technologies Used

- **FastAPI** – Lightweight web framework for APIs
- **PostgreSQL** – Relational database for sensor data
- **SQLAlchemy** – ORM for interacting with the database
- **Pydantic** – Data validation and parsing
- **Uvicorn** – ASGI server for FastAPI

---

## 🔌 API Endpoints

### `POST /data`

Receives new sensor data from the device.

**Example Payload:**

```json
{
  "data": {
    "TDS": 152.6,
    "temperature": 24.3,
    "time": "2025-05-18T13:24:55Z",
    "cycle": 2
  }
}
````

---

### `GET /data`

Returns all stored sensor data.

---

### `GET /data/latest`

Returns the most recent sensor data entry.

---

## 🕒 Data Format

* The `time` field must follow **ISO 8601 (UTC)** format:

  ```
  YYYY-MM-DDTHH:MM:SSZ
  ```

* The payload format must strictly match the expected schema in the backend.

⚠️ This format is expected and enforced by the backend, so accuracy is important.

---

## 🚀 Running the App Locally

1. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

2. **Run the development server:**

   ```bash
   uvicorn app.main:app --reload
   ```

3. **Access the interactive Swagger UI:**

   ```
   http://localhost:8000/docs
   ```

---

## 🗃️ Database Configuration

* Uses **PostgreSQL**.
* Connection string is defined in `database.py`.
* On first run, tables are automatically created based on the SQLAlchemy models.

You can use `.env` or environment variables to manage database credentials securely.

---

## 📦 Deployment Notes

To deploy the API (e.g., on a cloud platform):

* Use a production server like:

  ```bash
  uvicorn app.main:app --host 0.0.0.0 --port 80
  ```

* Use a process manager like **Gunicorn** or **Docker** for better stability in production.

---

## 🔍 Testing

* Test endpoints using Swagger UI (`/docs`) or tools like **Postman**.
* Make sure your sensor data payload matches the schema for successful POST requests.

---

## 📬 Contributions

This backend is part of an IoT project for monitoring water quality. Feel free to fork, modify, and adapt for your own hardware or software use cases.

---

## 🧠 Author Notes

This backend was designed to interface with a custom ESP32-based microcontroller setup using HTTP and NTP. It stores incoming water filter cycle logs and supports live data viewing through the frontend.

```

Let me know if you want a section added for Docker, Railway/Render deployment, or React frontend integration!
```
