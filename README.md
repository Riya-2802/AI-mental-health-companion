# AI Mental Health Companion

The **AI Mental Health Companion** is a web application designed to provide mental health support through empathetic and motivational responses. It allows users to interact with a chatbot that gives pre-programmed support or AI-generated responses based on selected emotions such as **Motivation**, **Anxiety**, or **Talk**.

---

## Features

- **Emotion-Based Responses**: Pre-defined replies for Motivation, Anxiety, and Talk.
- **AI Fallback**: Uses OpenAI to generate responses if no match is found.
- **MongoDB Integration**: Stores user messages, emotions, and bot replies.
- **User Authentication**: Signup/Login with secure JWT authentication.
- **Admin Panel**: View all users' chat histories.
- **Real-Time Chat UI**: Simple frontend built with React.
- **REST API**: Built using Express.js and Node.js.
- **Environment-Based Config**: Uses `.env` for configuration.
- **Toast Notifications**: User-friendly alerts via React Toastify.

---

## Getting Started

### Server

cd server

Install dependencies:
```bash
npm install

Run the backend:

node index.js

### Client

Navigate to the client directory:
```bash
cd ../client
```

Install dependencies:
```bash
npm install

Run the frontend:
npm start

React app running at `http://localhost:3000`

## 📦 Future Features

- 🗂 Chat history page for users  
- 📊 Emotion analysis dashboard (admin view)  
- 🔔 Daily motivational notifications via email  
- 🎙 Voice input using Web Speech API  
- 🌙 Dark mode  
