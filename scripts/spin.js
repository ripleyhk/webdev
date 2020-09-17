var posts = document.getElementsByClassName("post");

var i;
var post;
for (i = 0; i < posts.length; i++) {
  post = posts[i];
  post.addEventListener("mouseover", function() {
  post.style.transform = 'rotate(360deg)'; }); 
  post.addEventListener("mouseout", function() {
  post.style.transform = 'rotate(0deg)'; }); 
}
