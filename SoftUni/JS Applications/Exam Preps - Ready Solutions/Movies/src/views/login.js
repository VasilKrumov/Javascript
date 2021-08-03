import { html } from '../../node_modules/lit-html/lit-html.js';
import { successBox, errorBox } from '../notification.js';
import { login } from '../api/data.js';

const loginTemplate = (onSubmit) => html`
        <form @submit=${onSubmit} class="text-center border border-light p-5" action="" method="">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" placeholder="Email" name="email" value="">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" placeholder="Password" name="password" value="">
            </div>
        
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
`;


export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        try {
            if (!email || !password) {
                throw new Error('All fields are required!');
            }
            await login(email, password);
            successBox('Login successful.');
            ctx.setUserNav();
            ctx.page.redirect('/');

        } catch (err) {
            errorBox(err.message);
        }


    }
}
