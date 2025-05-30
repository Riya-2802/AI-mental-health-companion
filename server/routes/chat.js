const express = require('express');
const router = express.Router();
const OpenAI = require('openai');

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// POST /api/chat
router.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.status(500).json({ error: 'Failed to get response from OpenAI.' });
  }
});

module.exports = router;
