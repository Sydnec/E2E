# Hello World

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install helloworld.

Use node v16 use :
```bash
nvm install 16
```

```bash
npm i
```

## Usage

Start the application dev with :

```bash
npm run start
```

Created the dist with :

```bash
npm run dist
```

Analyse the coding rules with :

```bash
npm run lint
```
-----------

Scénario 1 : Connexion réussie et redirection vers le tableau de bord
Description : Ce test vérifie qu'un utilisateur peut se connecter avec des informations d'identification valides et être redirigé vers la page "Dashboard".
Étapes :

Ouvrir la page de connexion.
Saisir un nom d'utilisateur valide (TestE2E).
Saisir un mot de passe valide (password123).
Cliquer sur le bouton "Connexion".
Attendre que la page "Dashboard" soit chargée.
Résultat attendu : Le nom d'utilisateur TestE2E apparaît dans la barre de navigation pour confirmer que l'utilisateur est connecté.


Scénario 2 : Connexion échouée avec un compte inexistant
Description : Ce test vérifie que la tentative de connexion échoue lorsqu'un utilisateur utilise des identifiants incorrects.
Étapes :

Ouvrir la page de connexion.
Saisir un nom d'utilisateur invalide (InvalidUser).
Saisir un mot de passe incorrect (wrongpassword).
Cliquer sur le bouton "Connexion".
Vérifier que l'erreur "Ce compte n'existe pas" est affichée sous le formulaire.
Résultat attendu : L'utilisateur voit un message d'erreur approprié et n'est pas redirigé.


Scénario 3 : Soumission réussie du formulaire de contact
Description : Ce test vérifie que le formulaire de contact peut être soumis avec succès.
Étapes :

Ouvrir la page de contact.
Remplir les champs obligatoires : prénom, nom, téléphone, email, dates d'arrivée et de départ, message.
Cliquer sur le bouton "Envoyer".
Vérifier que la page reste sur /contact après la soumission.
Résultat attendu : Les informations saisies sont envoyées avec succès, et l'utilisateur peut rester sur la page.


Scénario 4 : Soumission et affichage d'un feedback
Description : Ce test vérifie qu'un utilisateur peut soumettre un avis et que celui-ci est correctement affiché.
Étapes :

Ouvrir la page de feedback.
Remplir les champs obligatoires : nom et message.
Cliquer sur le bouton "Envoyer".
Attendre que la liste des feedbacks soit mise à jour.
Vérifier que le message soumis apparaît dans la liste.
Résultat attendu : Le message de feedback apparaît immédiatement dans la liste affichée à l'écran.