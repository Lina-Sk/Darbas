// Index to keep track of the current set of slides
let slideIndex = 0;

// Function to change slides
function changeSlide(direction) {
    const gallery = document.querySelector('.gallery');
    const totalItems = document.querySelectorAll('.gallery-item').length;
    const itemsPerSlide = 4; // Number of images visible at once
    const maxIndex = Math.ceil(totalItems / itemsPerSlide) - 1; // Maximum index for sliding

    // Update slide index based on the direction
    slideIndex += direction;

    // Loop back to start or end if out of bounds
    if (slideIndex < 0) {
        slideIndex = maxIndex;
    } else if (slideIndex > maxIndex) {
        slideIndex = 0;
    }

    // Move the gallery to show the current set of images
    gallery.style.transform = `translateX(${-slideIndex * 100}%)`;
}


function openModal(imageSrc, title) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = imageSrc;
    captionText.innerHTML = title;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

document.getElementById("contact-form").onsubmit = function(event) {
    event.preventDefault();
    alert("Message sent! We will get back to you shortly.");
    this.reset();
}