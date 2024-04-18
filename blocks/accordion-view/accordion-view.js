export default function decorate(block) {
    console.log("Initializing accordion within the block", block);

    // Find all accordion containers within the specified block
    const accordionBlocks = block.querySelectorAll('.accordion-view');
    console.log(`Found ${accordionBlocks.length} accordion-view blocks within the specified block.`);

    if (accordionBlocks.length === 0) {
        console.error('No accordion views found in the block.');
        return; // Exit if no accordion blocks are found
    }

    // Initialize each accordion block found
    accordionBlocks.forEach((accordionBlock, index) => {
        console.log(`Initializing accordion block ${index + 1}`);

        accordionBlock.querySelectorAll('div > div:first-child').forEach((header, headerIndex) => {
            // Initially setup header and details for animation and accessibility
            const details = header.nextElementSibling;
            details.style.maxHeight = '0px'; // Start with collapsed details
            details.style.overflow = 'hidden'; // Prevent content overflow
            details.style.transition = 'max-height 0.5s ease-out'; // Smooth transition for expand/collapse

            // Add click event listener to each header
            header.addEventListener('click', () => {
                // Toggle the accordion section
                if (details.style.maxHeight !== '0px') {
                    details.style.maxHeight = '0px';
                    header.setAttribute('aria-expanded', 'false');
                    console.log(`Collapsing detail section ${headerIndex + 1}`);
                } else {
                    details.style.maxHeight = details.scrollHeight + 'px';
                    header.setAttribute('aria-expanded', 'true');
                    console.log(`Expanding detail section ${headerIndex + 1}`);
                }
            });
        });
    });
}
