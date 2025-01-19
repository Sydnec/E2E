// tests/feedback.test.js

module.exports = {
  'Scenario: Submit Feedback and Verify Display': function (browser) {
    const feedbackPage = browser.page.feedback();

    feedbackPage
      .navigate()
      .setValue('@nameField', 'Test User')
      .setValue('@messageField', 'This is a feedback message')
      .click('@submitButton');

    browser
      .pause(2000)  // Attendre que le feedback soit soumis
      .assert.containsText('@feedbackList', 'This is a feedback message')  // Vérifier que le message est affiché
      .end();
  },
};
