import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/api.js';
import { successBox, errorBox } from '../notification.js';


const registerTemplate = (onSubmit) => html`
        <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="post">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" placeholder="Email" name="email" value="">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" placeholder="Password" name="password" value="">
            </div>
        
            <div class="form-group">
                <label for="repeatPassword">Repeat Password</label>
                <input type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword" value="">
            </div>
        
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
`;



export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repeatPassword = formData.get('repeatPassword').trim();

        try {
            if (!email || !password || !repeatPassword) {
                throw new Error('All fields are required!');
            }

            if (password != repeatPassword) {
                throw new Error('Passwords don\'t match!');
            }

            await register(email, password);
            successBox('Successful registration!');
            ctx.setUserNav();
            ctx.page.redirect('/'); 

        } catch (err) {
            errorBox(err.message);
        }
    }
}