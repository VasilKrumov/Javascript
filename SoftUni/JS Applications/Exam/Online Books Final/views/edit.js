import { html } from '../node_modules/lit-html/lit-html.js'
import { getBookById, editBook } from '../services/mainReq'

const editTemplate = (onSubmit, book) => html` <section id="edit-page" class="edit">
    <form @submit=${onSubmit} id="edit-form">
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" .value=${book.title} />
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description">${book.description}</textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" .value=${book.imageUrl} />
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" .value=${book.type}>
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save" />
        </fieldset>
    </form>
</section>`

async function edit(context) {
    const bookDetails = await getBookById(context.params.bookId)
    context.renderContent(editTemplate(onEditSubmitHandler, bookDetails))

    async function onEditSubmitHandler(e) {
        e.preventDefault()
        const [title, description, imageUrl, type] = [...new FormData(e.target).values()]

        if (!title || !description || !imageUrl || !type) {
            return alert('All fields are required!')
        }

        await editBook(context.params.bookId, title, description, imageUrl, type)
        context.page.redirect(`/details/${bookDetails._id}`)
    }
}

export default edit
