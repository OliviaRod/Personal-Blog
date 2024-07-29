// Handle posts page load
if (window.location.pathname.endsWith('blog.html')) {
    const postsContainer = document.getElementById('postsContainer');
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No blog posts available.</p>';
    } else {
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p><strong>By:</strong>${post.username}</p>
                <p>${post.content}</p>
                <p><em>${new Date(post.date).toLocaleString()}</em></p>
                <button class="eraseButton" data-index"${index}>Erase</button>
            `;

            postsContainer.appendChild(postElement);
        });
    }

    document.querySelectorAll('.eraseButton').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
            posts.splice(index, 1);
            localStorage.setItem('blogPosts', JSON.stringify(posts));
            window.location.reload();
        });
    });

    document.getElementById('backButton').addEventListener('click', () => {
        window.location.href = 'index.html';
    });

}