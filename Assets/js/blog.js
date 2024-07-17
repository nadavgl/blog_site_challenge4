const contentSection = document.getElementById('main-content');

function displayPosts(posts) {
    contentSection.innerHTML = ' ';
    const postElement = document.createElement('div');
    
    posts.forEach(function(post) {
        postElement.classList.add('blog-post');
    });

    contentSection.appendChild(postElement);
}
