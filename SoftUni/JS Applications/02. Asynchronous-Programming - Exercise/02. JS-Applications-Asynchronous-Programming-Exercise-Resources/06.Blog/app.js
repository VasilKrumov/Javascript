function attachEvents() {
    const viewBtn = document.getElementById(`btnViewPost`)
    viewBtn.addEventListener('click', getSelectedPost)

    document.getElementById(`btnLoadPosts`).addEventListener('click', getPosts)

    // viewBtn.disabled = true;
}

attachEvents()

async function getPosts() {
    const url = `http://localhost:3030/jsonstore/blog/posts`

    const response = await fetch(url)
    const data = await response.json()

    const select = document.getElementById('posts')
    select.innerHTML = ''
    Object.values(data)
        .map(createOption)
        .forEach((o) => select.appendChild(o))
}
function createOption(post) {
    const result = document.createElement('option')
    result.value = post.id
    result.textContent = post.title

    return result
}

function getSelectedPost() {
    const postId = document.getElementById('posts').value
    getCommentsByPostId(postId)
}

async function getCommentsByPostId(postId) {
    const commentsUl = document.getElementById('post-comments')
    commentsUl.innerHTML = ''

    const [postResponse, commentsResponse] = await Promise.all([
        fetch('http://localhost:3030/jsonstore/blog/posts/' + postId),
        fetch(`http://localhost:3030/jsonstore/blog/comments`),
    ])

    const postData = await postResponse.json()
    document.getElementById('post-title').textContent = postData.title
    document.getElementById('post-body').textContent = postData.body

    const commentsData = await commentsResponse.json()
    const comments = Object.values(commentsData).filter((c) => c.postId == postId)

    comments.map(createComment).forEach((c) => commentsUl.appendChild(c))
}

function createComment(comment) {
    const result = document.createElement('li')
    result.textContent = comment.text
    result.id = comment.id
    return result
}
