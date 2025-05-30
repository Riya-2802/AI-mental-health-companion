const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const Message = require('./models/message');
require('dotenv').config();

// ✅ Initialize express
const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mentalhealth');

// ✅ Auth routes
app.use('/api/auth', authRoutes);

// ✅ Chat logic
app.post('/api/chat', async (req, res) => {
  const { option, message, username } = req.body;

  if (!option || !message || !username) {
    return res.status(400).json({ error: 'Username, option, and message are required' });
  }

  const userMsg = message.toLowerCase().trim();
  const optionKey = option.toLowerCase().trim();

  const responseSets = {
    motivation: {
      "hello": "Hi! Ready to feel motivated today?",
      "i am sad": "It's okay to feel down sometimes. You can get through this!",
      "need help": "Remember, every step forward counts. Keep pushing!",
      "i feel hopeless": "Even the darkest night will end and the sun will rise.",
      "i can't do it": "You are stronger than you think. Don’t give up!",
      "i'm tired": "Rest if you must, but don’t quit. You’re doing great!",
      "i want to give up": "Every great achievement starts with the decision to try.",
      "i feel lost": "Not all who wander are lost. Keep going.",
      "i failed": "Failure is not the opposite of success—it’s part of it.",
      "i need encouragement": "You’ve come so far—believe in your journey!",
    },
    anxiety: {
      "hello": "Hello! Let's work on calming your mind.",
      "i am anxious": "Try to breathe slowly. You’re doing great!",
      "need help": "Focus on the present moment. You’ve got this!",
      "i can't breathe": "Take slow, deep breaths. In through your nose, out through your mouth.",
      "i feel panic": "You’re safe. Ground yourself by naming 5 things you can see.",
      "i am overwhelmed": "Break things into small steps. One thing at a time.",
      "i feel dizzy": "Sit down, breathe slowly, and drink water if you can.",
      "my heart is racing": "That's a common anxiety symptom. Deep breathing can help.",
      "i can't focus": "Try the 5-4-3-2-1 mindfulness technique. It really helps.",
      "i'm scared": "You're not alone. You're strong, and this feeling will pass."  
    },
    talk: {
      "hello": "Hey there! Feel free to share anything you want.",
      "i feel lonely": "I'm here with you. You’re not alone.",
      "need help": "Sometimes talking helps. I'm listening.",
      "i'm sad": "It's okay to feel this way. You matter and your feelings are valid.",
      "can i talk to you": "Of course! I’m here for you.",
      "i feel lost": "That’s a tough feeling. Let’s try to talk it out together.",
      "no one understands me": "I may be AI, but I’m here to listen without judgment.",
      "i just want someone to talk to": "I’m always here to chat with you.",
      "i feel empty": "That can be a heavy feeling. Want to share more about it?",
      "i need someone": "I’m here with you now. You’re not alone."
    }
  };

  let botResponse;
  if (responseSets[optionKey] && responseSets[optionKey][userMsg]) {
    botResponse = responseSets[optionKey][userMsg];
  } else {
    // Fallback to OpenAI
    try {
      const OpenAI = require('openai');
      const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: `You are a helpful assistant for ${optionKey}.` },
          { role: 'user', content: message }
        ]
      });

      botResponse = completion.choices[0].message.content;
    } catch (err) {
      return res.status(500).json({ error: 'OpenAI error' });
    }
  }

  // Save message to MongoDB
  await Message.create({
    username,
    emotion: option,
    userMessage: message,
    botResponse
  });

  res.json({ response: botResponse });
});

// ✅ Start server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
