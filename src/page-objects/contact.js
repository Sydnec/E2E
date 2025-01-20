module.exports = {
  elements: {
    firstNameField: 'input[name="first_name"]',
    lastNameField: 'input[name="last_name"]',
    mobilePhoneField: 'input[name="mobile_phone"]',
    emailField: 'input[name="email"]',
    arrivedAtField: 'input[name="arrived_at"]',
    departureAtField: 'input[name="departure_at"]',
    messageField: 'textarea[name="message"]',
    submitButton: 'button[type="submit"]',
  },

  commands: [
    {
      navigateToContactPage() {
        return this.api.url('http://localhost:9090/contact');
      },
    },
  ],
};
