//import { getAssetUrl } from '../../utils/dam'; // Assuming a helper function to get DAM asset URLs
import { createOptimizedPicture } from '../../scripts/aem.js';

const jsonData = JSON.parse(document.getElementById('product-tour').textContent); // Assuming data is stored in a hidden element

const accordionContainer = document.querySelector(".accordion-container");
const mainImage = document.querySelector("#main-image");

// Loop through tours data and populate the structure
jsonData.tours.forEach((tour) => {
  const accordion = document.createElement("button");
  accordion.textContent = tour.name;
  accordion.classList.add("accordion");
  accordionContainer.appendChild(accordion);

  const panel = document.createElement("div");
  panel.classList.add("panel");
  accordionContainer.appendChild(panel);

  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add("carousel-container");
  panel.appendChild(carouselContainer);

  const carouselSlide = document.createElement("div");
  carouselSlide.classList.add("carousel-slide");
  carouselContainer.appendChild(carouselSlide);

  tour.steps.forEach((step) => {
    const content = document.createElement("div");
    content.classList.add("carousel-content");

    const picture = document.createElement("picture");
    const img = document.createElement("img");
    img.src = getAssetUrl(step.imgPath); // Update image source using DAM URL
    img.alt = step.imgAltText;
    picture.appendChild(img);
    content.appendChild(picture);

    const text = document.createElement("p");
    text.textContent = step.text;
    content.appendChild(text);

    carouselSlide.appendChild(content);

    content.addEventListener("click", () => {
      mainImage.src = img.src; // Update main image on click
      mainImage.alt = img.alt;
    });
  });
});
