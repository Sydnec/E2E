// src/tests/login.test.js

module.exports = {
  'Scenario 1: Successful Login and Redirect to Dashboard': function (browser) {
    const loginPage = browser.page.login();  // Appel de la page d'objet 'login'

    // Appel de la méthode personnalisée pour naviguer
    loginPage
      .navigateToLoginPage()
      .setValue('@usernameField', 'TestE2E')
      .setValue('@passwordField', 'password123')
      .click('@submitButton');

    browser
      .waitForElementVisible('@dashboard', 5000)
      .assert.containsText('@userProfile', 'TestE2E')
      .end();
  },

  'Scenario 2: Unsuccessful Login with Invalid Account': function (browser) {
    const loginPage = browser.page.login();  // Appel de la page d'objet 'login'

    // Appel de la méthode personnalisée pour naviguer
    loginPage
      .navigateToLoginPage()
      .setValue('@usernameField', 'InvalidUser')
      .setValue('@passwordField', 'wrongpassword')
      .click('@submitButton');

    browser
      .waitForElementVisible('@errorMessage', 5000)
      .assert.containsText('@errorMessage', 'Ce compte n’existe pas')
      .end();
  },
};
