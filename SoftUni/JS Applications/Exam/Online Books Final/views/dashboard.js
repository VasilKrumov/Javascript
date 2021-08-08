import { html } from '../node_modules/lit-html/lit-html.js'
import { bookView } from '../common/bookView.js'
import { getBooks } from '../services/mainReq'

const dashboardTemplate = (books) => html` <section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    ${books.length == 0
        ? html`<p class="no-books">No books in database!</p>`
        : html` <ul class="other-books-list">
              ${books.map(bookView)}
          </ul>`}
</section>`

async function dashboard(context) {
    const allBooks = await getBooks()
    context.renderContent(dashboardTemplate(allBooks))
}

export default dashboard
