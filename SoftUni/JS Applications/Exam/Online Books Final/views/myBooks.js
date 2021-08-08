import { html } from '../node_modules/lit-html/lit-html.js'
import { bookView } from '../common/bookView'
import { getMyBooks } from '../services/mainReq'

const myBooksTemplate = (myBooks) => html` <section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    ${myBooks.length === 0
        ? html`<p class="no-books">No books in database!</p>`
        : html` <ul class="my-books-list">
              ${myBooks.map(bookView)}
          </ul>`}
</section>`

async function myBooks(context) {
    const myBooks = await getMyBooks(sessionStorage.getItem('userId'))

    context.renderContent(myBooksTemplate(myBooks))
}

export default myBooks
