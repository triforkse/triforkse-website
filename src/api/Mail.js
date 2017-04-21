var mailgun = require('mailgun.js');
var mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-a1611b421ff3890eb51d8f4d176d5315'});

export default {
  send: ({name, email, company, companySize, phone, message }) => {
    return mg.messages.create('www.trifork.se', {
      from: "Trifork Contact Form <contact-form@trifork.se>",
      to: ["stockholm@trifork.com"],
      subject: "Trifork.se Contact Form",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Company Size: ${companySize}
        Message:

        ${message}
      `
    });
  }
};
