import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
    console.log("Block contents:", block.innerHTML);

    block.querySelectorAll(".accordion-carousel-new > div").forEach(section => {
        const title = section.querySelector("div[data-align='center']");
        const content = section.querySelector(".accordion-content");
        const carousel = content.querySelector(".carousel");
        const prevBtn = content.querySelector(".prev-btn");
        const nextBtn = content.querySelector(".next-btn");

        title.style.cursor = 'pointer';
        title.addEventListener('click', () => {
            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Collapse content
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // Expand content
            }
        });

        // Initialize carousel
        let currentSlide = 0;

        // Show initial slide
        showSlide(currentSlide);

        // Event listeners for prev and next buttons
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + carousel.children.length) % carousel.children.length;
            showSlide(currentSlide);
        });

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % carousel.children.length;
            showSlide(currentSlide);
        });

        function showSlide(slideIndex) {
            // Hide all slides
            for (let i = 0; i < carousel.children.length; i++) {
                carousel.children[i].style.display = "none";
            }
            // Show current slide
            carousel.children[slideIndex].style.display = "block";
        }
    });

    // Initially prepare all content divs for animation
    block.querySelectorAll(".accordion-carousel-new .accordion-content").forEach(content => {
        content.style.maxHeight = "0px"; // Start collapsed
        content.style.overflow = "hidden";
        content.style.transition = "max-height 0.3s ease-out"; // Smooth transition for expanding and collapsing
    });
}
