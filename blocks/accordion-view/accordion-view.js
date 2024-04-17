import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  if (!block || !block.children.length || block.children.length < 2) {
    console.log('Error: Block requires at least two rows.');
    return;
  }

  const accordion = document.createElement('div');
  accordion.classList.add('accordion');

  [...block.children].forEach((row, rowIndex) => {
    if (rowIndex === 0) {
      const header = document.createElement('h3');
      header.classList.add('accordion-header');
      header.textContent = row.children[0].textContent;
      accordion.append(header);
    } else {
      const content = document.createElement('div');
      content.classList.add('accordion-content');
      content.style.display = 'none'; // Initially hidden

      row.children.forEach((col) => {
        content.append(col); // Move columns into content section
      });

      accordion.append(content);

      // Add event listener for toggling content visibility (example)
      header.addEventListener('click', () => {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
      });
    }
  });

  // Optimize images with createOptimizedPicture (optional)
  accordion.querySelectorAll('img').forEach((img) => {
    // ... same logic as multi-colum.js
  });

  block.textContent = '';
  block.append(accordion);
}
