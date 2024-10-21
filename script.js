let slideIndex = 0;

function changeSlide(direction) {
    const gallery = document.querySelector('.gallery');
    const totalItems = document.querySelectorAll('.gallery-item').length;
    const itemsPerSlide = 12; 
    const maxIndex = Math.ceil(totalItems / itemsPerSlide) - 1;

    slideIndex += direction;


    if (slideIndex < 0) {
        slideIndex = maxIndex;
    } else if (slideIndex > maxIndex) {
        slideIndex = 0;
    }

    const offset = -slideIndex * (itemsPerSlide * 50); 
    gallery.style.transform = `translateX(${offset}px)`;
}

function toggleMenu() {
    const nav = document.querySelector('nav');
    const headerTitle = document.querySelector('h1');

    nav.classList.toggle('active');
    
    if (nav.classList.contains('active')) {
        headerTitle.style.opacity = '0.3'; 
        headerTitle.style.transition = 'opacity 0.5s ease'; 
    } else {
        headerTitle.style.opacity = '1';  
    }
}


function changePage(pageId) {

    event.preventDefault();

    window.history.pushState(null, null, `#${pageId}`);

    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active-section');
    });

  
    const activeSection = document.getElementById(pageId);
    if (activeSection) {
        activeSection.classList.add('active-section');
        window.scrollTo(0, 0); 
    }

   
    const navLinks = document.querySelectorAll('.nav-button');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const activeLink = document.querySelector(`a[href="#${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

window.onload = function() {
    const currentHash = window.location.hash.substring(1); 
    if (currentHash) {
        changePage(currentHash); 
    } else {
        changePage('home'); 
    }

    window.scrollTo(0, 0);
};




const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');


const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        modal.style.display = 'block'; 
        modalImg.src = this.src; 
    });
});


closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


