const keys = require('../config/keys');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(keys.sendGridKey);

module.exports = async ({ subject, recipients, body }, content) => {
  const formattedRecipients = recipients.map(({ email }) => email);
  const msg = {
    to: formattedRecipients,
    from: 'emaily@bhanujgandhi.tech',
    subject: subject,
    html: content,
  };
  await sgMail.send(msg);
};
