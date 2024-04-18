export default function decorate(block) {
    // Debugging to see what's inside the block
    console.log("Block contents:", block.innerHTML);

    // Checking for a table within the block
    const table = block.querySelector("table");
    if (table) {
        console.log("Table found, iterating rows:");
        table.querySelectorAll("tr").forEach((row, rowIndex) => {
            console.log(`Row ${rowIndex}:`);
            row.querySelectorAll("td, th").forEach((cell, cellIndex) => {
                console.log(`  Cell ${cellIndex}: Text = '${cell.innerText}', HTML = '${cell.innerHTML}'`);
            });
        });
    } else {
        console.error('No table found in the block.');
    }

    // Now initializing accordion views if present
    const accordionBlocks = block.querySelectorAll('.accordion-view');
    if (accordionBlocks.length > 0) {
        console.log("Initializing accordion views");
        accordionBlocks.forEach((accordionBlock, blockIndex) => {
            console.log(`Processing accordion block ${blockIndex + 1}`);
            accordionBlock.querySelectorAll('div > div:first-child').forEach((category, categoryIndex) => {
                console.log(`Initializing category ${categoryIndex + 1}: ${category.textContent.trim()}`);
                category.setAttribute('aria-expanded', 'false');
                category.addEventListener('click', function() {
                    const details = this.nextElementSibling;
                    const isExpanded = this.getAttribute('aria-expanded') === 'true';
                    console.log(`Category ${categoryIndex + 1} clicked: ${isExpanded ? 'collapse' : 'expand'}`);

                    // Collapse all other details
                    accordionBlock.querySelectorAll('div > div:nth-child(2)').forEach((d, detailIndex) => {
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
    } else {
        console.log('No accordion views found in the block.');
    }
}
