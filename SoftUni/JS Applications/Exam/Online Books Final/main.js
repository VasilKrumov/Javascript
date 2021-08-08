import page from './node_modules/page/page.mjs'
import { render } from './node_modules/lit-html/lit-html.js'
import { logout } from './data/martiReq.js'

import create from './views/create.js'
import dashboard from './views/dashboard.js'
import details from './views/details.js'
import edit from './views/edit.js'
import login from './views/login.js'
import myBooks from './views/myBooks.js'
import register from './views/register.js'

page('/', decorateContextFunction, dashboard)
page('/create', decorateContextFunction, create)
page('/register', decorateContextFunction, register)
page('/login', decorateContextFunction, login)
page('/my-books', decorateContextFunction, myBooks)
page('/edit/:bookId', decorateContextFunction, edit)
page('/details/:bookId', decorateContextFunction, details)

setUserNavigation()
page.start()

function decorateContextFunction(context, next) {
    context.renderContent = (content) => render(content, document.getElementById('site-content'))
    context.setUserNav = setUserNavigation
    next()
}

function setUserNavigation() {
    const email = sessionStorage.getItem('email')
    if (email) {
        document.getElementById('user').style.display = ''
        document.querySelector('#user > span').textContent = `Welcome, ${email}`
        document.getElementById('guest').style.display = 'none'
    } else {
        document.getElementById('user').style.display = 'none'
        document.getElementById('guest').style.display = ''
    }
}

document.getElementById('logoutButton').addEventListener('click', () => {
    logout()
    setUserNavigation()
    page.redirect('/')
})
