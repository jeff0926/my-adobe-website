import { createOptimizedPicture } from '../../scripts/aem.js';

export default async function decorate(block) {
    const rows = [...block.children];

    rows.forEach((row, rowIndex) => {
        const images = row.querySelectorAll('img');
        images.forEach((img) => {
            const optimizedPicture = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
            img.closest('picture').replaceWith(optimizedPicture);
        });
    });

    // Create a new <div> element
    const newDivElement = document.createElement('div');
    // Create a <ui5-carousel> element and populate it with newNode
    newDivElement.innerHTML = `<ui5-carousel>${block.innerHTML}</ui5-carousel>`;
    // Replace the original block with the new structure
    block.replaceWith(newDivElement);
}


//<img src="../assets/images/sample2.jpg" alt="Landscape 2" slot="default-1" />