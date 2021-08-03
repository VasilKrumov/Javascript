import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllMovies } from '../api/data.js';



const homeTemplate = (movies, isUser) => html`
        <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40;">
            <img src="https://s.studiobinder.com/wp-content/uploads/2019/06/Best-M-Night-Shyamalan-Movies-and-Directing-Style-StudioBinder.jpg"
                class="img-fluid" alt="Responsive image">
            <h1 class="display-4">Movies</h1>
            <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
        </div>
        <h1 class="text-center">Movies</h1>
        <section>
            ${isUser !== null ? html`<a href="/create" class="btn btn-warning ">Add Movie</a>` : ''}
        
            <form class="search float-right">
                <label>Search: </label>
                <input type="text">
                <input type="submit" class="btn btn-info" value="Search">
            </form>
        </section>
        
        <div class=" mt-3 ">
            <div class="row d-flex d-wrap">
        
                <div class="card-deck d-flex justify-content-center">
        
        
                    ${movies.length == 0 ?html` <h3><strong> No movies :( - add the first one!</strong></h3> ` : movies.map(movieTemplate)}
        
                </div>
            </div>
        </div>
`;



const movieTemplate = (movie, user) => html`
<div class="card mb-4">
    <img class="card-img-top" src=${movie.img} alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
        ${user == null ? '' : html`<a href="#/details/${movie._id}"><button type="button"
                class="btn btn-info">Details</button></a>
    </div>`}

</div>
`;


export async function homePage(ctx) {
    const isUser = sessionStorage.getItem('username');
    const data = await getAllMovies();
    console.log(data);
    ctx.render(homeTemplate(data, isUser));
}