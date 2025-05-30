# AI Mental Health Companion

An AI-powered web application designed to provide empathetic mental health support through conversational chat. The system responds to users' emotional states—Motivation, Anxiety, and Talk—by delivering customized messages and leveraging OpenAI's GPT-3.5 Turbo for dynamic assistance.

---

## Features

- **Emotion-Based Responses:** Tailored chatbot replies based on selected emotions: Motivation, Anxiety, and Talk.
- **AI Fallback:** Uses OpenAI API to handle queries outside predefined responses.
- **Persistent Chat Storage:** Stores user messages and AI responses in MongoDB with emotion tagging.
- **User Authentication:** Secure JWT-based login system.
- **Responsive UI:** Built with React for smooth user interaction.
- **Error Handling & Validation:** Ensures reliable communication between frontend and backend.

---

## Technologies Used

- **Backend:** Node.js, Express, MongoDB, Mongoose, OpenAI API
- **Frontend:** React, React Router, Axios
- **Authentication:** JSON Web Tokens (JWT)
- **Others:** dotenv, cors, React Toastify for notifications

---

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local or cloud instance)
- OpenAI API Key ([Get API key](https://platform.openai.com/signup))
- Git

---

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/ai-mental-health-companion.git
cd ai-mental-health-companion
Certainly! Here's a professional, polished README file tailored for your AI Mental Health Companion project, ready for GitHub:

---

````markdown
# AI Mental Health Companion

An AI-powered web application designed to provide empathetic mental health support through conversational chat. The system responds to users' emotional states—Motivation, Anxiety, and Talk—by delivering customized messages and leveraging OpenAI's GPT-3.5 Turbo for dynamic assistance.

---

## Features

- **Emotion-Based Responses:** Tailored chatbot replies based on selected emotions: Motivation, Anxiety, and Talk.
- **AI Fallback:** Uses OpenAI API to handle queries outside predefined responses.
- **Persistent Chat Storage:** Stores user messages and AI responses in MongoDB with emotion tagging.
- **User Authentication:** Secure JWT-based login system.
- **Responsive UI:** Built with React for smooth user interaction.
- **Error Handling & Validation:** Ensures reliable communication between frontend and backend.

---

## Technologies Used

- **Backend:** Node.js, Express, MongoDB, Mongoose, OpenAI API
- **Frontend:** React, React Router, Axios
- **Authentication:** JSON Web Tokens (JWT)
- **Others:** dotenv, cors, React Toastify for notifications

---

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local or cloud instance)
- OpenAI API Key ([Get API key](https://platform.openai.com/signup))
- Git

---

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/ai-mental-health-companion.git
cd ai-mental-health-companion
````

---

### Backend Setup

1. Navigate to the backend directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the `server/` directory with the following variables:

```env
MONGO_URI=mongodb://localhost:27017/mentalhealth
OPENAI_API_KEY=your_openai_api_key_here
JWT_SECRET=your_jwt_secret_here
```

4. Start the backend server:

```bash
node index.js
```

The backend will be available at: `http://localhost:5000`

---

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd ../client
```

2. Install dependencies:

```bash
npm install
```

3. Run the React development server:

```bash
npm start
```

The frontend will open at: `http://localhost:3000`

---

## Usage

1. Register or login to the app.
2. Select your emotional state (Motivation, Anxiety, Talk).
3. Enter your message and receive tailored AI responses.
4. Messages and responses are stored for review and analysis.

---

## Sample Interaction

| Emotion    | User Message      | AI Response                                                              |
| ---------- | ----------------- | ------------------------------------------------------------------------ |
| Motivation | "I feel lost"     | "Not all who wander are lost. Keep going."                               |
| Anxiety    | "I can't breathe" | "Take slow, deep breaths. In through your nose, out through your mouth." |
| Talk       | "I feel empty"    | "That can be a heavy feeling. Want to share more about it?"              |

---

## Future Enhancements

* User chat history and analytics dashboard
* Admin panel for emotion trend monitoring
* Daily motivational notifications via email
* Voice input integration
* Dark mode and accessibility improvements

---

## Contributing

Contributions are welcome! Please fork the repo and open a pull request with your proposed changes. For major changes, please open an issue first to discuss what you would like to improve.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

Created by **Your Name** – [your.email@example.com](mailto:your.email@example.com)
GitHub: [https://github.com/yourusername](https://github.com/yourusername)
LinkedIn: [https://linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)

---

*Thank you for using AI Mental Health Companion. Your mental wellbeing matters.*

```

---

If you want, I can help format it as a downloadable file or add a license file as well!
```
