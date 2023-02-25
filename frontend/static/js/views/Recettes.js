import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("Recettes")
    }

    // affichage de tous les recettes
    async getHtml() {
        async function getData(url){
            const response = await fetch(url)
            return response.json()
        }

        const data = await getData('/static/js/views/data.json')
        
        let listPosts = " <div  class='container' > <div class='row' >"
        for (let i in data.results) {
            listPosts += `<div class="col-md-4">
            <div class="thumbnail" style='min-height:600px'>
                <img src="`+data.results[i].thumbnail_url+`" alt="Image 1" style="max-height:200px ; width:100%; object-fit:cover">
                <div class="caption">
                    <h3>`+data.results[i]["name"]+`</h3>
                    <p> `+data.results[i].description+`</p>
                        <a href="/recette-view/`+data.results[i]['id']+`" data-link class="btn btn-primary">Voir detail</a>
                </div>
            </div>
        </div>`
        }
        listPosts +="</div></div>"

        return `
        <h1>Recettes</h1>
        `+listPosts;
    }
}


       
        

