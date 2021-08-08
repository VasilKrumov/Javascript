import { html } from '../node_modules/lit-html/lit-html.js'
import { loginUser, logout } from '../services/mainReq'

const loginTemplate = (onSubmit) => html` <section id="login-page" class="login">
    <form @submit=${onSubmit} id="login-form">
        <fieldset>
            <legend>Login Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email" />
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password" />
                </span>
            </p>
            <input class="button submit" type="submit" value="Login" />
        </fieldset>
    </form>
</section>`

function login(context) {
    context.renderContent(loginTemplate(onLoginSubmitHandler))

    async function onLoginSubmitHandler(e) {
        e.preventDefault()
        const [email, password] = [...new FormData(e.target).values()]

        if (!email || !password) {
            return alert('All fields are required!')
        }

        const userData = await loginUser(email, password)
        sessionStorage.setItem('email', userData.email)
        sessionStorage.setItem('authToken', userData.accessToken)
        sessionStorage.setItem('userId', userData._id)

        context.setUserNav()
        context.page.redirect('/')
    }
}

export default login
