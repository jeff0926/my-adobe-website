import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Alert is no longer needed, remove it
  // alert(block);

  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');

    // Check if the row has at least 4 children (assuming first 4 columns are for product tour)
    if (row.children.length >= 4) {
      const [imageCell, contentCell, imagePathCell, altTextCell] = row.children;

      // Extract data from relevant columns (assuming image path in 3rd and alt text in 4th)
      const imagePath = imagePathCell.textContent.trim();
      const altText = altTextCell.textContent.trim();

      // Assuming content goes in the second cell
      const content = contentCell.textContent.trim();

      // Create an image element if image path exists
      let imageElement;
      if (imagePath) {
        imageElement = document.createElement('img');
        imageElement.src = imagePath;
        imageElement.alt = altText;
      }

      // Create the product tour content (you can customize this based on your needs)
      const productTourContent = document.createElement('div');
      productTourContent.classList.add('product-tour-content'); // Add a custom class for styling
      if (imageElement) {
        productTourContent.append(imageElement);
      }
      productTourContent.append(content);

      li.append(productTourContent);
    } else {
      console.warn("Skipping row with less than 4 columns!");
      // You can handle rows with less than 4 columns differently (e.g., skip them or display an error)
    }

    li.classList.add('product-tour-step'); // Add a custom class for styling

    ul.append(li);
  });

  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}
