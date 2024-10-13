const thumbnailContainer = document.getElementById("thumbnail-container");
const displayImage = document.getElementById("display-image");
const displayTitle = document.getElementById("Title");
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");

let imgIndex = 0;

const images = [
    { src: "./images/4.jpg", alt: "Hornsea Beach", title: "A Day at Hornsea Beach" },
    { src: "./images/1.jpg", alt: "Worlds within Worlds", title: "Worlds within Worlds" },
    { src: "./images/2.jpg", alt: "Timber Frames on Sand", title: "Timber Frames on Sand" },
    { src: "./images/3.jpg", alt: "London Q F Week", title: "London Queer Fashion Week" },
];

function updateDisplay(index) {
    displayImage.src = images[index].src;
    displayImage.alt = images[index].alt;
    displayImage.title = images[index].title;
}

images.forEach((image, i) => {
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.classList.add("thumbnail");
    
    img.addEventListener("click", () => {
        imgIndex = i;
        updateDisplay(imgIndex);
    });
    
    thumbnailContainer.appendChild(img);
});

function navigateLeft() {
    imgIndex = (imgIndex - 1 + images.length) % images.length;
    updateDisplay(imgIndex);
}

function navigateRight() {
    imgIndex = (imgIndex + 1) % images.length;
    updateDisplay(imgIndex);
}

leftButton.addEventListener("click", navigateLeft);
rightButton.addEventListener("click", navigateRight);

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        navigateLeft();
    } else if (event.key === "ArrowRight" || event.key === " ") {
        navigateRight();
    }
});

updateDisplay(imgIndex);
