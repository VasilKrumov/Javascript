import * as CRUD from './api.js'

const host = 'http://localhost:3030'
CRUD.settings.host = host

export const loginUser = CRUD.loginUser
export const registerUser = CRUD.registerUser
export const logout = CRUD.logout

export async function getBooks() {
    return await CRUD.get(host + '/data/books?sortBy=_createdOn%20desc')
}

export async function getBookById(id) {
    return await CRUD.get(host + '/data/books/' + id)
}

export async function addBook(title, description, imageUrl, type) {
    return await CRUD.post(host + '/data/books', {
        title,
        description,
        imageUrl,
        type,
    })
}

export async function editBook(bookId, title, description, imageUrl, type) {
    return await CRUD.put(host + '/data/books/' + bookId, {
        title,
        description,
        imageUrl,
        type,
    })
}

export async function deleteBook(id) {
    return await CRUD.del(host + '/data/books/' + id)
}

export async function getMyBooks(userId) {
    return await CRUD.get(host + `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function getBookLikesBySpecificUser(bookId, userId) {
    return await CRUD.get(host + `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export async function getBookLikes(bookId) {
    return await CRUD.get(host + `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`)
}

export async function addLike(bookId) {
    return await CRUD.post(host + '/data/likes', { bookId })
}
