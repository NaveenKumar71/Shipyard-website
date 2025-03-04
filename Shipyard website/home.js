document.addEventListener("DOMContentLoaded", function () {
    const dropBtn = document.querySelector(".dropbtn");
    const dropdownMenu = document.getElementById("dropdown-menu");

    dropBtn.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    window.addEventListener("click", function (e) {
        if (!dropBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});



let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Navigation controls
function plusSlides(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("slide");

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}

// Initialize slideshow
document.addEventListener("DOMContentLoaded", showSlides);


document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    document.querySelector(".prev").addEventListener("click", function () {
        changeSlide(-1);
    });

    document.querySelector(".next").addEventListener("click", function () {
        changeSlide(1);
    });

    function changeSlide(n) {
        let slides = document.getElementsByClassName("slide");
        slideIndex += n;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        if (slideIndex < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
});
