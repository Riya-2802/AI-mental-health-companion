Got it! Here's a simple, professional README file you can copy-paste for your AI Mental Health Companion project, including intro, tech stack, features, and setup instructions for frontend and backend:

---

# AI Mental Health Companion

A web application that provides mental health support by responding empathetically to user messages based on selected emotions. It uses predefined responses and OpenAI's GPT API as a fallback for more natural conversation.

---

## Technologies Used

* **Backend:** Node.js, Express, MongoDB, Mongoose
* **Frontend:** React.js
* **APIs:** OpenAI GPT-3.5 Turbo
* **Others:** CORS, dotenv for environment variables

---

## Features

* Emotion-based chatbot with predefined and AI-generated responses
* Stores chat history in MongoDB
* User authentication and authorization (login/register)
* Responsive React frontend with simple UI
* Error handling and input validation

---

## Setup Instructions

### Backend Setup

1. Navigate to the server folder:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `server/` directory with the following variables:

   ```
   MONGO_URI=mongodb://localhost:27017/mentalhealth
   OPENAI_API_KEY=your_openai_api_key_here
   JWT_SECRET=your_jwt_secret_here
   ```

4. Start the backend server:

   ```bash
   node index.js
   ```

   The server will run at [http://localhost:5000](http://localhost:5000).

---

### Frontend Setup

1. Navigate to the client folder:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000).

---

Feel free to contribute or report issues!

---

Let me know if you want me to help format this further or add more details.
