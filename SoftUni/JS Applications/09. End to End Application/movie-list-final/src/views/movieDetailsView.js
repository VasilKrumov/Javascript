import { html } from '../../node_modules/lit-html/lit-html.js';

import * as movieService from '../services/movieService.js';

const priveButtons = (_id) => html`
    <div>
        <a class="btn btn-success" href="/movies/${_id}/edit">Edit</a>
        <a class="btn btn-danger" href="/movies/${_id}/delete">Delete</a>
    </div>
`;

const publicButtons = (_id) => html`
    <div>
        <button class="btn btn-success">Up</button>
        <button class="btn btn-danger">Down</button>
    </div>
`;

const movieDetailsTemplate = ({
    _id,
    isOwn,
    title,
    description,
    img,
}) => html`
    <div class="movie-details" style="width: 18rem;">
        <img src="${img}" class="card-img-top" alt="${title}">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
        </div>

        <div>
            ${isOwn
                ? priveButtons(_id)
                : publicButtons(_id)
            }
        </div>
    </div>
`;

export function movieDetailsPage(ctx) {
    movieService.getOne(ctx.params.movieId)
        .then(movieData => {
            let templateData = {
                isOwn: movieData._ownerId == ctx.userId,
                ...movieData,
            };

            ctx.render(movieDetailsTemplate(templateData));
        })
}