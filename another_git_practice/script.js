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
    let blogTitle = document.getElementById("blogTitle").value;
console.log(blogTitle + " will be added!");


}