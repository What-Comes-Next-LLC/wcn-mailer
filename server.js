const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sendEmail } = require('./mailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS with explicit settings
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  optionsSuccessStatus: 204,
  preflightContinue: false
}));

// Explicitly handle OPTIONS for the email endpoint
app.options('/send-email', cors());

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { to, subject, html } = req.body;

  if (!to || !subject || !html) {
    return res.status(400).send('Missing required fields.');
  }

  try {
    await sendEmail(to, subject, html);
    res.status(200).send('Email sent successfully.');
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).send('Failed to send email.');
  }
});

// Listen on all network interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`📡 Mail microservice running on 0.0.0.0:${PORT}`);
});
