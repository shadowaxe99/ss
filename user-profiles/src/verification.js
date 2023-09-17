```javascript
const nodemailer = require('nodemailer');
const twilio = require('twilio');

const { EMAIL_SERVICE, EMAIL_USER, EMAIL_PASS, TWILIO_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } = process.env;

const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

const client = twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

const sendEmailVerification = async (email, token) => {
  const mailOptions = {
    from: EMAIL_USER,
    to: email,
    subject: 'Elysium OS - Verify your email',
    text: `Please verify your email by clicking on the following link: https://elysiumos.com/verify/${token}`
  };

  await transporter.sendMail(mailOptions);
};

const sendSMSVerification = async (phoneNumber, token) => {
  await client.messages.create({
    body: `Your Elysium OS verification code is: ${token}`,
    from: TWILIO_PHONE_NUMBER,
    to: phoneNumber
  });
};

module.exports = {
  sendEmailVerification,
  sendSMSVerification
};
```