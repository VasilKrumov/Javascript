import * as movieService from '../services/movieService.js';
import { movieFormTemplate } from './templates/movieFormTemplate.js';

export function addMoviePage(ctx) {
    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        // console.log(formData.get('title'));
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');

        movieService.create(title, imageUrl, description)
            .then(res => {
                console.log(res);

                ctx.page.redirect('/movies');
            });
    }

    ctx.render(movieFormTemplate(onSubmit));
}