const logo = document.getElementById("logo")
const postAvatar = document.getElementById("post-avatar")
let i = 0;

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function render() {
    post.innerHTML = `
                    <div id="post-header">
                        <img class="avatar" id="post-avatar" src="${posts[i].avatar}">
                        <div id="post-details">
                            <p class="accent" id="username">${posts[i].name}</p>
                            <p id="location">${posts[i].location}</p>
                        </div>
                    </div>
                    <img id="post-img" src="${posts[i].post}">
                    <div id="post-footer">
                        <img class="icon" id="icon-heart" src="images/icon-heart.png">
                        <img class="icon" id="icon-comment" src="images/icon-comment.png">
                        <img class="icon" id="icon-dm" src="images/icon-dm.png">
                        <p>${posts[i].likes} likes</p>
                        <div id="comments">
                            <p class="accent">${posts[i].username}</p>
                            <p>${posts[i].comment}</p>
                    </div>
`   
}

render()

logo.addEventListener("click", function(){
    if (i < posts.length - 1) {
        i++
        render()
    } else {
        i = 0;
        render()
    }
})