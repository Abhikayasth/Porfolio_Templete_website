const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'awefkjbrf',
      pass: 'akrgf', // replace with your password
    },
});

app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'awefjwafj',
    subject: `New message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send(info.response);
    }
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
  const mailOptions = {
    from: 'awefb',
    to: 'awefubsefb',
    subject: 'Server Started',
    text: 'The server has started and is ready to send emails.',
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Startup email sent: ' + info.response);
    }
  });
});
