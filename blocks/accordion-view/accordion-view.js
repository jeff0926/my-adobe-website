document.addEventListener('DOMContentLoaded', () => {
    const accordionBlocks = document.querySelectorAll('.accordion-view');
    console.log("Initializing accordion views");

    accordionBlocks.forEach((block, blockIndex) => {
        console.log(`Processing block ${blockIndex + 1}`);
        block.querySelectorAll('div > div:first-child').forEach((category, categoryIndex) => {
            console.log(`Initializing category ${categoryIndex + 1}: ${category.textContent.trim()}`);
            category.setAttribute('aria-expanded', 'false');
            category.addEventListener('click', function() {
                const details = this.nextElementSibling;
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                
                console.log(`Category ${categoryIndex + 1} clicked: ${isExpanded ? 'collapse' : 'expand'}`);

                // Collapse all other details
                block.querySelectorAll('div > div:nth-child(2)').forEach((d, detailIndex) => {
                    if (d !== details) {
                        if (d.style.maxHeight) {
                            console.log(`Collapsing other detail ${detailIndex + 1}`);
                            d.style.maxHeight = null;
                            d.previousElementSibling.setAttribute('aria-expanded', 'false');
                        }
                    }
                });

                // Toggle the current detail view
                if (isExpanded) {
                    details.style.maxHeight = null;
                    this.setAttribute('aria-expanded', 'false');
                    console.log(`Collapsing detail ${categoryIndex + 1}`);
                } else {
                    details.style.maxHeight = details.scrollHeight + "px";
                    this.setAttribute('aria-expanded', 'true');
                    console.log(`Expanding detail ${categoryIndex + 1}`);
                }
            });
        });
    });
});
