// checks that the form is completed sends an error message if the required content is not in the form. Posts blog to local storage
document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const message = document.getElementById('message');

    if (!username || !title || !content) {
        message.textContent = 'Please complete the form.';
        return;
    }

    const blogPost = {
        username,
        title,
        content,
        date: new Date().toISOString()
    };

    let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    posts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(posts));

    window.location.href = 'blog.html';
});
