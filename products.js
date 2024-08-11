// Get posts div
const postsDiv = document.getElementById('posts');

// Display posts
posts.forEach(post => {
  let html = `
    <div>
      <h3>${post.title}</h3>
      <embed src="${post.pdf}"> 
    </div>
  `;

  postsDiv.innerHTML += html;
})

