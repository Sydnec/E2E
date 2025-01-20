module.exports = {
  elements: {
    firstNameField: 'input[name="firstName"]',
    lastNameField: 'input[name="lastName"]',
    mobilePhoneField: 'input[name="mobilePhone"]',
    emailField: 'input[name="email"]',
    arrivedAtField: 'input[name="arrivedAt"]',
    departureAtField: 'input[name="departureAt"]',
    messageField: 'textarea[name="message"]',
    submitButton: 'button[type="submit"]'
  },

  commands: [
    {
      navigateToContactPage() {
        return this.api.url('http://localhost:9090/contact');
      },
    },
  ],
};
