let index = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Function to move to the next slide
function nextSlide() {
    index = (index + 1) % totalSlides;
    updateSlider();
}

// Function to update the slider position
function updateSlider() {
    const slideWidth = slides[0].clientWidth;
    const sliderContainer = document.querySelector('.slides');
    sliderContainer.style.transform = `translateX(${-index * slideWidth}px)`;
}

// Automatic slide transition every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Event listeners for the manual navigation buttons
document.querySelector(".next").addEventListener("click", function () {
    clearInterval(slideInterval);  // Stop automatic slide when manually navigating
    nextSlide();
    slideInterval = setInterval(nextSlide, 5000);  // Resume automatic slide after manual interaction
});

document.querySelector(".prev").addEventListener("click", function () {
    clearInterval(slideInterval);  // Stop automatic slide when manually navigating
    index = (index - 1 + totalSlides) % totalSlides;  // Move to the previous slide
    updateSlider();
    slideInterval = setInterval(nextSlide, 5000);  // Resume automatic slide after manual interaction
});

// Alert for Contact button
document.querySelector(".contact-btn").addEventListener("click", function () {
    alert("Called 106. Stay Calm Don't Panic.");
});

// Alert for Subscribe button
document.querySelector("footer button").addEventListener("click", function () {
    const emailInput = document.querySelector("footer input");
    if (emailInput.value) {
        alert(`Subscribed with email: ${emailInput.value}`);
        emailInput.value = "";  // Clear the email input field
    } else {
        alert("Please enter a valid email!");
    }
});

const faqQuestions = document.querySelectorAll('.faq-question');

// Loop through all questions and add a click event listener
faqQuestions.forEach((question) => {
    question.addEventListener('click', function () {
        // Find the next element (the answer) and toggle visibility
        const answer = this.nextElementSibling;

        // Toggle the display of the answer
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});
document.querySelector(".view-btn").addEventListener("mouseover", function () {
    document.getElementById("custom-alert").style.display = "flex";
});

document.getElementById("close-alert").addEventListener("click", function () {
    document.getElementById("custom-alert").style.display = "none";
});
