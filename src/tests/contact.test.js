// tests/contact.test.js

module.exports = {
  'Scenario: Submit Contact Form Successfully': function (browser) {
    const contactPage = browser.page.contact();

    contactPage
      .navigateToContactPage()
      .setValue('@firstNameField', 'Jean')
      .setValue('@lastNameField', 'Louis')
      .setValue('@mobilePhoneField', '0610203040')
      .setValue('@emailField', 'jean.louis@email.com')
      .setValue('@arrivedAtField', '2025-01-01')
      .setValue('@departureAtField', '2025-01-10')
      .setValue('@messageField', 'This is a test message')
      .click('@submitButton');

    browser
      .assert.urlContains('/contact')  // Vérifier qu'il n'y a pas de redirection (optionnel)
      .end();
  },
};
