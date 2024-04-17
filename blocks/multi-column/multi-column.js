import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Handle potential errors and empty blocks
  if (!block || !block.children.length) {
    console.log('Error: Empty block received. Block:', block);
    return;
  } else {
    console.log('Processing block with children:', block.children.length);
  }

  // Create the unordered list (ul) element
  const ul = document.createElement('ul');
  ul.classList.add('multi-column'); // Add custom class for styling

  // Process each row in the block
  [...block.children].forEach((row) => {
    const li = document.createElement('li');

    // Handle rows with less than 4 columns (prevent errors)
    const cols = [...row.children].slice(0, 4); // Take maximum of 4 columns

    cols.forEach((col) => {
      li.append(col); // Move columns into the list item
    });

    // Apply column styling based on the number of columns
    switch (cols.length) {
      case 1:
        li.classList.add('multi-column-1-col');
        break;
      case 2:
        li.classList.add('multi-column-2-col');
        break;
      case 3:
        li.classList.add('multi-column-3-col');
        break;
      case 4:
        li.classList.add('multi-column-4-col');
        break;
      default:
        // Handle unexpected number of columns (optional: logging or fallback)
        console.warn('Unexpected number of columns in row:', cols.length);
        break;
    }

    ul.append(li);
  });

  // Optimize images with createOptimizedPicture
  ul.querySelectorAll('img').forEach((img) => {
    img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));
  });

  // Replace the block content with the optimized list
  block.textContent = '';
  block.append(ul);
}
