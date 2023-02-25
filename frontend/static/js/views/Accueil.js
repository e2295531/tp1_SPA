import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("Accueil")
    }

    //affichage de contenu de la page d'accueil
    async getHtml() {
        return `
       
         
  <div class="jumbotron">
    <h1>Bienvenue au recettes faciles avec Samira </h1>
    <p class="lead">On propose une variété de recettes faciles</p>
    <a class="btn btn-primary btn-lg" href="/recettes" role="button">Voir le menu</a>
  </div>
   
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h2>Heading 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit elit eu elit bibendum, vel volutpat massa pellentesque.</p>
        <a class="btn btn-secondary" href="#" role="button">Learn More</a>
      </div>
      <div class="col-md-4">
        <h2>Heading 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit elit eu elit bibendum, vel volutpat massa pellentesque.</p>
        <a class="btn btn-secondary" href="#" role="button">Learn More</a>
      </div>
      <div class="col-md-4">
        <h2>Heading 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit elit eu elit bibendum, vel volutpat massa pellentesque.</p>
        <a class="btn btn-secondary" href="#" role="button">Learn More</a>
      </div>
    </div>
  </div>
  

        `;
    }
}