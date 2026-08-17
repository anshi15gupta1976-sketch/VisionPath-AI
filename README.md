# 🚀 VisionPath AI

> **AI-powered career guidance platform that helps students discover suitable career paths, build personalized roadmaps, and get instant AI career guidance.**

🌐 **Live Demo:** https://vision-path-ai-plum.vercel.app/
💻 **GitHub:** https://github.com/anshi15gupta1976-sketch/VisionPath-AI

---

## 📌 About the Project

**VisionPath AI** is a career guidance web application designed to help students and beginners make better career decisions.

The platform combines a **career assessment system**, **personalized career recommendations**, **step-by-step learning roadmaps**, **learning resources**, and an **AI Career Assistant** in one platform.

Users can take a short assessment to identify a suitable career direction and then explore the skills, projects, and preparation required for that career.

---

## ✨ Features

### 🧠 AI Career Assessment

Users answer questions based on their:

* Interests
* Problem-solving approach
* Working preferences
* Skills
* Career goals

The system analyzes the responses and recommends a suitable career category.

### 🎯 Career Recommendation

VisionPath currently provides recommendations such as:

* Software Engineer
* UI/UX Designer
* Business Professional
* Data / AI Professional

The result page also explains **why the career may be suitable** based on the assessment responses.

### 🗺️ Personalized Career Roadmap

After receiving a career recommendation, users can view a structured roadmap containing:

* Learning stages
* Required skills
* Practical projects
* Interview preparation
* Career preparation

### 📚 Learning Resources

The platform provides resources for topics including:

* Programming Fundamentals
* Data Structures & Algorithms
* Web Development
* Git & GitHub

### 🤖 AI Career Assistant

The AI Career Assistant provides guidance about:

* Career choices
* Software Engineering
* Artificial Intelligence
* Machine Learning
* Data Science
* Web Development
* Programming
* UI/UX
* Projects
* Resumes
* Interviews
* Job preparation
* Learning roadmaps

The assistant supports **Markdown-formatted responses** and includes a **Copy** feature for AI responses.

---

## 🏗️ Project Architecture

```text
                    ┌─────────────────────┐
                    │   VisionPath AI     │
                    │    React Frontend   │
                    └──────────┬──────────┘
                               │
                               │ REST API
                               ▼
                    ┌─────────────────────┐
                    │   Node.js + Express │
                    │   Backend / Vercel  │
                    └──────────┬──────────┘
                               │
                               │ AI Request
                               ▼
                    ┌─────────────────────┐
                    │      Groq API       │
                    │   AI Career Model   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    AI Response      │
                    └─────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML
* CSS
* React Router
* React Markdown
* Vite

### Backend

* Node.js
* Express.js
* REST APIs
* CORS
* dotenv

### AI

* Groq API
* Llama 3.1 8B Instant

### Development AI

* Ollama
* Qwen3:4b

### Deployment

* Vercel
* GitHub

---

## 📂 Project Structure

```text
VisionPath-AI/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── Features.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Assessment.jsx
│   │   │   ├── CareerResult.jsx
│   │   │   ├── CareerRoadmap.jsx
│   │   │   ├── LearningResources.jsx
│   │   │   ├── CareerAssistant.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── api.js
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## 🔄 How VisionPath Works

### Step 1 — Career Assessment

The user starts the career assessment and answers questions about their interests and preferences.

### Step 2 — Career Analysis

The application categorizes the responses into career areas such as:

```text
Technical
Creative
Business
Data / AI
```

### Step 3 — Career Recommendation

The highest-scoring category determines the recommended career path.

### Step 4 — Career Roadmap

The user can open a roadmap containing the skills and preparation required for the selected career.

### Step 5 — Learning Resources

Users can explore additional resources to develop the required skills.

### Step 6 — AI Career Assistant

Users can ask personalized career questions and receive AI-generated guidance.

---

## 🤖 AI Career Assistant Flow

```text
User Question
      │
      ▼
CareerAssistant.jsx
      │
      ▼
api.js
      │
      ▼
Vercel Backend
      │
      ▼
/api/career-assistant
      │
      ▼
Groq API
      │
      ▼
AI Generated Response
      │
      ▼
Markdown + Typing Effect
      │
      ▼
User
```

---

## ⚙️ Local Installation

### 1. Clone the repository

```bash
git clone https://github.com/anshi15gupta1976-sketch/VisionPath-AI.git
cd VisionPath-AI
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Start the frontend

```bash
npm run dev
```

### 4. Install backend dependencies

Open another terminal:

```bash
cd backend
npm install
```

### 5. Configure environment variables

Create a `.env` file inside the backend folder:

```env
GROQ_API_KEY=your_groq_api_key
```

> Never commit your API key to GitHub.

### 6. Start the backend

```bash
node server.js
```

The backend will run locally on:

```text
http://localhost:5000
```

---

## 🔐 Environment Variables

The backend requires:

| Variable       | Description                              |
| -------------- | ---------------------------------------- |
| `GROQ_API_KEY` | API key used for the AI Career Assistant |

For production deployment, the API key should be added through the hosting platform's environment-variable settings instead of being written directly in source code.

---

## 🔌 API Endpoints

### Test Backend

```http
GET /api/test
```

Example response:

```json
{
  "success": true,
  "message": "Backend connection successful!"
}
```

### Career Assistant

```http
POST /api/career-assistant
```

Request:

```json
{
  "question": "How can I become an AI Engineer?"
}
```

Response:

```json
{
  "success": true,
  "answer": "..."
}
```

---

## 🚀 Deployment

### Frontend

The React frontend is deployed using **Vercel**.

### Backend

The Node.js/Express backend is also deployed using **Vercel**.

### AI Service

The production AI Career Assistant uses the **Groq API**.

---

## 🔮 Future Scope

Possible future improvements include:

* 👤 User authentication
* 📊 Personalized progress tracking
* 🧠 More advanced career assessment
* 📈 Skill-gap analysis
* 🎓 Course recommendations
* 💼 Job and internship recommendations
* 📄 AI-powered resume analysis
* 🎤 AI interview practice
* 🗣️ Voice-based career assistant
* 📱 Mobile application
* 📊 Student career dashboard
* 🤝 Mentor/student interaction
* 📧 Career alerts and notifications

---

## 🎯 Project Goals

VisionPath AI aims to make career guidance:

* **Accessible**
* **Personalized**
* **Practical**
* **Beginner-friendly**
* **AI-powered**

The goal is to help users move from:

```text
Career Confusion
       ↓
Career Assessment
       ↓
Career Recommendation
       ↓
Learning Roadmap
       ↓
Skills + Projects
       ↓
Interview Preparation
       ↓
Career Growth
```

---

## 👩‍💻 Author

**Anshika Gupta**

B.Tech — Computer Science / Artificial Intelligence

### Project

**VisionPath AI — AI Career Guidance Platform**

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for educational and portfolio purposes.



