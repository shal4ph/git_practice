// let postTitle = document.querySelector("h1");
// postTitle.addEventListener('mouseover', function() {

// postTitle.style.backgroundColor = "yellow";
// });
// postTitle.addEventListener('mouseout', function() {

//     postTitle.style.backgroundColor = "transparent";
//     });
// // console.log(postTitle);

// let blogTitle = document.getElementById("blogTitle");
// console.log(blogTitle);
// blogTitle.addEventListener("change", (e) => {e.target.value.length==0
//     ?(blogTitle.style.border="5px solid red")
//     :(blogTitle.style.border="5px solid green");
// });

let addPostButton = document.querySelector("button");
addPostButton.addEventListener("click", storePost);

function storePost(){
    //reading input value
    let blogTitle = document.getElementById("blogTitle").value;
    //new <li> tag created
// console.log(blogTitle + " will be added!");
let newPostItem = document.createElement("li");
//new <p> tag created
let newPostContent = document.createElement("p");
//adding content to <p> tag
newPostContent.innerText = blogTitle;
// console.log(newPostContent);
// addding <p> inside <li>
newPostItem.appendChild(newPostContent);
//fetching <ul> from document
let allPosts = document.getElementById("allPosts");
//adding <li> inside <ul>
allPosts.appendChild(newPostItem);
//empty value of <input> field
document.getElementById("blogTitle").value = "";


}