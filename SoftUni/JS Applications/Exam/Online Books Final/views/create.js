import { html } from '../node_modules/lit-html/lit-html.js'
import { addBook } from '../services/mainReq'

const createTemplate = (onSubmit) => html`
    <section id="create-page" class="create">
        <form @submit=${onSubmit} id="create-form">
            <fieldset>
                <legend>Add new Book</legend>
                <p class="field">
                    <label for="title">Title</label>
                    <span class="input">
                        <input type="text" name="title" id="title" placeholder="Title" />
                    </span>
                </p>
                <p class="field">
                    <label for="description">Description</label>
                    <span class="input">
                        <textarea name="description" id="description" placeholder="Description"></textarea>
                    </span>
                </p>
                <p class="field">
                    <label for="image">Image</label>
                    <span class="input">
                        <input type="text" name="imageUrl" id="image" placeholder="Image" />
                    </span>
                </p>
                <p class="field">
                    <label for="type">Type</label>
                    <span class="input">
                        <select id="type" name="type">
                            <option value="Fiction">Fiction</option>
                            <option value="Romance">Romance</option>
                            <option value="Mistery">Mistery</option>
                            <option value="Classic">Clasic</option>
                            <option value="Other">Other</option>
                        </select>
                    </span>
                </p>
                <input class="button submit" type="submit" value="Add Book" />
            </fieldset>
        </form>
    </section>
`

function create(context) {
    context.renderContent(createTemplate(onCreateSubmitHandler))

    async function onCreateSubmitHandler(e) {
        e.preventDefault()
        const [title, description, imageUrl, type] = [...new FormData(e.target).values()]

        if (!title || !description || !imageUrl || !type) {
            return alert('All fileds are required!')
        }

        await addBook(title, description, imageUrl, type)
        context.page.redirect('/')
    }
}

export default create
