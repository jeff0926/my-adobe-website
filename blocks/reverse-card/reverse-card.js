export default function decorate(block) {
  console.log("decorate(block)");
  if (block.type === 'reverse-card') {
    console.log("Block data:", block); // Log the entire block object

    const slides = block.querySelectorAll('.reverse-card div'); // Select all slide containers
    console.log("Number of slides:", slides.length); // Log the number of slides

    const reverseCardContainer = document.createElement('div'); // Create container for buttons
    reverseCardContainer.classList.add('reverse-card-container'); // Add class for styling

    const prevButton = document.createElement('button'); // Create previous button
    prevButton.classList.add('prev-button'); // Add class for styling
    prevButton.textContent = 'Previous'; // Set button text

    const nextButton = document.createElement('button'); // Create next button
    nextButton.classList.add('next-button'); // Add class for styling
    nextButton.textContent = 'Next'; // Set button text

    reverseCardContainer.appendChild(prevButton); // Add previous button to container
    reverseCardContainer.appendChild(nextButton); // Add next button to container

    let currentSlideIndex = 0; // Track current slide index

    // Function to move to the next slide
    function moveToNextSlide() {
      currentSlideIndex++;
      if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
      }
      updateSlideDisplay();
    }

    // Function to move to the previous slide
    function moveToPreviousSlide() {
      currentSlideIndex--;
      if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
      }
      updateSlideDisplay();
    }

    // Function to update slide display based on current index
    function updateSlideDisplay() {
      slides.forEach((slide, index) => {
        slide.classList.remove('active'); // Remove 'active' class from all slides
        if (index === currentSlideIndex) {
          slide.classList.add('active'); // Add 'active' class to current slide
        }
      });
    }

    // Add event listeners to buttons
    prevButton.addEventListener('click', moveToPreviousSlide);
    nextButton.addEventListener('click', moveToNextSlide);

    // Add container with buttons before the reverse-card element
    block.parentNode.insertBefore(reverseCardContainer, block);

    updateSlideDisplay(); // Set initial slide display
  }
}
