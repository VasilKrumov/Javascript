import { html } from '../node_modules/lit-html/lit-html.js'
import { getBookById, addLike, getBookLikes, getBookLikesBySpecificUser, deleteBook } from '../services/mainReq'

const detailsTemplate = (book, onDelete, onLike, likes, numberOfLikesForUser) => html` <section
    id="details-page"
    class="details"
>
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl} /></p>
        <div class="actions">
            <!-- Edit/Delete buttons ( Only for creator of this book )  -->
            ${book._ownerId === sessionStorage.getItem('userId')
                ? html` <a class="button" href=${`/edit/${book._id}`}>Edit</a>
                      <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
                : null}

            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            ${book._ownerId !== sessionStorage.getItem('userId') &&
            sessionStorage.length !== 0 &&
            numberOfLikesForUser !== 1
                ? html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`
                : null}

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png" />
                <span id="total-likes">Likes: ${likes}</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`

async function details(context) {
    const bookId = context.params.bookId
    const bookDetails = await getBookById(bookId)
    const likes = await getBookLikes(bookId)
    const likesForUser = await getBookLikesBySpecificUser(bookId, sessionStorage.getItem('userId'))

    context.renderContent(detailsTemplate(bookDetails, onDelete, onLike, likes, likesForUser))
    async function onDelete() {
        if (confirm('Are u sure')) {
            await deleteBook(bookId)
            return context.page.redirect('/')
        }
    }

    async function onLike() {
        await addLike(bookId)
        return context.page.redirect(`/details/${bookDetails._id}`)
    }
}

export default details
