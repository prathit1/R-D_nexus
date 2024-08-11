// Get form and inputs
const form = document.getElementById('pdf-form');
const pdfInput = document.getElementById('pdf-input');
const titleInput = document.getElementById('title-input');

// Array to store posts
let posts = []; 

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  let pdf = pdfInput.files[0]; 
  let title = titleInput.value;

  // Add post
  posts.push({
    title: title, 
    pdf: pdf 
  });

  // Redirect to workspace
  window.location.href = 'workspace.html';

});
