// src/page-objects/login.js
module.exports = {
  elements: {
    usernameField: 'input[name="username"]',
    passwordField: 'input[name="password"]',
    submitButton: 'button[type="submit"]',
    errorMessage: '.error-message',
    dashboard: '#dashboard',
    userProfile: '#userProfile',
  },

  commands: [
    {
      // Méthode personnalisée pour naviguer vers la page de connexion
      navigateToLoginPage() {
        return this.api.url('http://localhost:9090/login');  // URL de la page de login
      },
    },
  ],
};
