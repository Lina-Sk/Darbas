let slideIndex = 0;

function changeSlide(direction) {
    const gallery = document.querySelector('.gallery');
    const totalItems = document.querySelectorAll('.gallery-item').length;
    const itemsPerSlide = 4; 
    const maxIndex = Math.ceil(totalItems / itemsPerSlide) - 1; 
    slideIndex += direction;

    if (slideIndex < 0) {
        slideIndex = maxIndex;
    } else if (slideIndex > maxIndex) {
        slideIndex = 0;
    }

    gallery.style.transform = `translateX(${-slideIndex * 100}%)`;
}

