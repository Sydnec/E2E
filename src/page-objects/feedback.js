// src/page-objects/feedback.js
module.exports = {
    elements: {
        nameField: 'input[name="name"]',
        messageField: 'textarea[name="message"]',
        submitButton: 'button[type="submit"]',
        feedbackList: '.feedback-list',
    },
    commands: [
        {
            // Méthode personnalisée pour la page Feedback
            navigateToFeedbackPage() {
                return this.api.url('http://localhost:3000/feedback');
            },
        },
    ],
};
