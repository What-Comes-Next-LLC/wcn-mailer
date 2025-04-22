require('dotenv').config();
console.log('SMTP USER:', process.env.PROTON_BRIDGE_USER);
console.log('SMTP PASS:', process.env.PROTON_BRIDGE_PASS ? '[OK]' : '[MISSING]');

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: '127.0.0.1',
  port: 1025,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.PROTON_BRIDGE_USER,
    pass: process.env.PROTON_BRIDGE_PASS,
  },
  tls: {
    rejectUnauthorized: false,
    minVersion: 'TLSv1.2'
  }
});

async function sendEmail(to, subject, html) {
  await transporter.sendMail({
    from: '"Coach" <coach@whatcomesnextllc.us>',
    to,
    subject,
    html,
  });
}

module.exports = { sendEmail };
