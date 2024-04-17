import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  console.log('--- Processing block data ---');
  console.log('block:', block); // Log the entire block object

  if (!block || !block.children.length || block.children.length < 2) {
    console.error('Error: Block requires at least two rows.');
    return;
  }

  const accordion = document.createElement('div');
  accordion.classList.add('accordion');

  [...block.children].forEach((row, rowIndex) => {
    console.log('--- Processing row:', rowIndex + 1, '---');
    console.log('row:', row); // Log the entire row object

    if (Array.isArray(row.children)) {
      console.log('  - Row has', row.children.length, 'children.');

      if (rowIndex === 0) {
        const header = document.createElement('h3');
        header.classList.add('accordion-header');
        header.textContent = row.children[0].textContent;
        accordion.append(header);
      } else {
        const content = document.createElement('div');
        content.classList.add('accordion-content');
        content.style.display = 'none'; // Initially hidden

        row.children.forEach((col, colIndex) => {
          console.log('    - Processing column:', colIndex + 1, 'in row');
          console.log('      - col:', col); // Log the entire column element
          content.append(col); // Move columns into content section
        });

        accordion.append(content);

        // Add event listener for toggling content visibility (example)
        header.addEventListener('click', () => {
          content.style.display = content.style.display === 'none' ? 'block' : 'none';
        });
      }
    } else {
      console.warn('Row ', rowIndex + 1, ' does not have a valid children array.');
    }
  });

  // Optimize images with createOptimizedPicture (optional)
  accordion.querySelectorAll('img').forEach((img) => {
    console.log('Optimizing image:', img.src, img.alt);
    img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  });

  block.textContent = '';
  block.append(accordion);
}
