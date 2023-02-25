## description de votre projet

un sites internet qui propose au utilisateurs des recettes facile

page d'accueil: contient la presentation du site
page de recette: contient la liste des recettes vous pouvez cliquer sur voir le detail pour voir le detail de la recette
page de contact:contient une formulaire de contact



 

 
 
 ## instruction d’installation et d’utilisation du projet 

 - commande: npm install
 - créer un compte au https://rapidapi.com/apidojo/api/tasty pour avoir le keyAPI
 - ajouter de fichiers .env et config.js à la racine du projet
 - commande: npm start

 
### le fichier . env 
PORT=8081
API_KEY=votre keyAPI
### Le fichier config.js 
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  PORT: process.env.PORT,
  API_KEY: process.env.API_KEY,
};

 
 ##  Github

 https://github.com/e2295531/tp1_SPA