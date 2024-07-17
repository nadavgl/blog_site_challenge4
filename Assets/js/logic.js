const theme = localStorage.getItem('theme');

if (theme === 'dark') {
  document.body.classList.add('dark-theme');
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

const postList = document.getElementById('postList');

function displayPosts() {
  const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  postList.innerHTML = '';

  storedPosts.forEach(function(post) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<h2>${post.title}</h2>
                          <p>By: ${post.username}</p>
                          <p>${post.content}</p>`;
    postList.appendChild(listItem);
  });
}

window.addEventListener('DOMContentLoaded', function() {
  displayPosts();
});

const backButton = document.getElementById('backButton');

if (backButton) {
  backButton.addEventListener('click', function() {
    window.location.href = 'index.html';
  });
}

const developerPortfolioLink = document.getElementById('developerPortfolio');

if (developerPortfolioLink) {
  developerPortfolioLink.addEventListener('click', function() {
    window.open('https://your-portfolio-link.com', '_blank');
  });
}
