export default function decorate(block) {
  if (block.type === 'reverse-card') {
    console.log("Block data:", block); // Log the entire block object

    const slides = block.querySelectorAll('.reverse-card div'); // Select all slide containers
    console.log("Number of slides:", slides.length); // Log the number of slides

    slides.forEach((slideContainer) => {
      const imageElement = slideContainer.querySelector('div:first-child'); // Get image element
      const captionElement = slideContainer.querySelector('div:last-child'); // Get caption element

      console.log("Slide container:", slideContainer); // Log the slide container element

      if (imageElement) {
        const imageSrc = imageElement.textContent || imageElement.innerText;
        console.log("Image source:", imageSrc);
      } else {
        console.log("Slide missing image element!");
      }

      if (captionElement) {
        const captionText = captionElement.textContent || captionElement.innerText;
        console.log("Caption text:", captionText);
      } else {
        console.log("Slide missing caption element!");
      }

      // Process image source and caption (e.g., display in carousel)
      // ...
    });
  }
}
