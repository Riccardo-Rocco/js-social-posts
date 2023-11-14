const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const postHeader = document.createElement("div");
        postHeader.classList.add("post__header");

        const postMeta = document.createElement("div");
        postMeta.classList.add("post-meta");

        const postMetaIcon = document.createElement("div");
        postMetaIcon.classList.add("post-meta__icon");

        if (post.author.image) {
            const profilePic = document.createElement("img");
            profilePic.classList.add("profile-pic");
            profilePic.src = post.author.image;
            profilePic.alt = post.author.name;
            postMetaIcon.appendChild(profilePic);
        } else {
            const defaultProfilePic = document.createElement("div");
            defaultProfilePic.classList.add("profile-pic-default");
            const initials = document.createElement("span");
            initials.textContent = post.author.name.charAt(0);
            defaultProfilePic.appendChild(initials);
            postMetaIcon.appendChild(defaultProfilePic);
        }

        const postMetaData = document.createElement("div");
        postMetaData.classList.add("post-meta__data");

        const postMetaAuthor = document.createElement("div");
        postMetaAuthor.classList.add("post-meta__author");
        postMetaAuthor.textContent = post.author.name;

        const postMetaTime = document.createElement("div");
        postMetaTime.classList.add("post-meta__time");
        postMetaTime.textContent = "Postato " + timeAgo(post.created);

        postMetaData.appendChild(postMetaAuthor);
        postMetaData.appendChild(postMetaTime);

        postMeta.appendChild(postMetaIcon);
        postMeta.appendChild(postMetaData);

        postHeader.appendChild(postMeta);

        const postText = document.createElement("div");
        postText.classList.add("post__text");
        postText.textContent = post.content;

        const postImage = document.createElement("div");
        postImage.classList.add("post__image");
        const image = document.createElement("img");
        image.src = post.media;
        image.alt = "";
        postImage.appendChild(image);

        const postFooter = document.createElement("div");
        postFooter.classList.add("post__footer");

        const likes = document.createElement("div");
        likes.classList.add("likes");
        const likeButton = document.createElement("button");
        likeButton.classList.add("like-button", "js-like-button");
        likeButton.dataset.postid = post.id;
        likeButton.innerHTML = '<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i><span class="like-button__label">Mi Piace</span>';

        const likesCounter = document.createElement("div");
        likesCounter.classList.add("likes__counter");
        likesCounter.innerHTML = "Piace a <b class='js-likes-counter'>" + post.likes + "</b> persone";

        likes.appendChild(likeButton);
        likes.appendChild(likesCounter);

        postFooter.appendChild(likes);

        postElement.appendChild(postHeader);
        postElement.appendChild(postText);
        postElement.appendChild(postImage);
        postElement.appendChild(postFooter);

        container.appendChild(postElement);
    });

    container.addEventListener("click", function(event) {
        if (event.target.matches(".like-button")) {
            event.target.classList.add("like-button--liked");
        }
    });

    function timeAgo(date) {
        const currentDate = new Date();
        const postDate = new Date(date);
        const timeDiff = currentDate.getTime() - postDate.getTime();
        const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
        if (daysDiff === 0) {
            return "oggi";
        } else if (daysDiff === 1) {
            return "ieri";
        } else {
            return daysDiff + " giorni fa";
        }
    }
});

