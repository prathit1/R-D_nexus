// Get DOM elements
const postsEl = document.getElementById('posts');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const postBtn = document.getElementById('postBtn');

// Array to store posts 
let posts = [];

// Function to render posts
function renderPosts() {
  let postsHTML = '';
  for(let post of posts) {
    postsHTML += `
      <div class="post">
        <h3 class="post-title">${post.title}</h3>
        <p>${post.content}</p>
      </div>
    `;
  }

  postsEl.innerHTML = postsHTML;
}

// Add submit post event
postBtn.addEventListener('click', function() {
  let post = {
    title: titleInput.value,
    content: contentInput.value
  };

  posts.push(post);

  renderPosts();

  titleInput.value = '';
  contentInput.value = '';
});