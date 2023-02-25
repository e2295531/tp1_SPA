import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("Recette details")
    }

    //affichage du contenu de la page de détails pour chaque recette
    async getHtml() {
      
        const nu  = Number(this.params.id)

        async function getData(url){
            const response = await fetch(url)
            return response.json()
        }

        const data = await getData('/static/js/views/data.json')
        

        const article = data["results"].find((item) => item.id === nu);

        return (
          `
        <div class="container">
    <h1>` +
          article.name +
          `</h1>
    <div class="row">
      <div class="col-md-12">
        <video style="max-height:500px ; width:100%; object-fit:cover" controls poster="poster.png">
          <source src="` +
          article.original_video_url +
          `" type="video/mp4">
          Your browser does not support the video tag.
        </video
      </div>
      <div class="col-md-12">
        <h3>Description</h3>
        <p>` +
          article.description +
          `</p>
        <h3>temps de preparation</h3>
        <ul>
          <li>` +
          article["prep_time_minutes"] +
          `min</li>
          
        </ul>
        <h3>temps de cuisson</h3>
        <ul>
          <li>` +
          article["cook_time_minutes"] +
          `min</li>
          
        </ul>
        
        <a href='/menu' data-link class="btn btn-primary">Retour au menu</a>
      </div>
    </div>
  </div>
</body>
</html>

        `
        );
    }
}

