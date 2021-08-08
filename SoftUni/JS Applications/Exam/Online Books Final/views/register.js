import { html } from '../node_modules/lit-html/lit-html.js'
import { registerUser } from '../services/mainReq'

const registerTemplate = (onSubmit) => html` <section id="register-page" class="register">
    <form @submit=${onSubmit} id="register-form">
        <fieldset>
            <legend>Register Form</legend>
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
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirmPass" id="repeat-pass" placeholder="Repeat Password" />
                </span>
            </p>
            <input class="button submit" type="submit" value="Register" />
        </fieldset>
    </form>
</section>`

function register(context) {
    context.renderContent(registerTemplate(onRegisterSubmitHandler))

    async function onRegisterSubmitHandler(e) {
        e.preventDefault()
        const [email, password, confirmPass] = [...new FormData(e.target).values()]

        if (!email || !password || !confirmPass) {
            return alert('All fields are required!')
        } else if (password !== confirmPass) {
            return alert('Passwords must match!')
        }

        const userData = await registerUser(email, password)
        sessionStorage.setItem('email', userData.email)
        sessionStorage.setItem('authToken', userData.accessToken)
        sessionStorage.setItem('userId', userData._id)

        context.setUserNav()
        context.page.redirect('/')
    }
}

export default register
