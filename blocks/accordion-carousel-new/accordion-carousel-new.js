export default function decorate(block) {
    console.log("Block contents:", block.innerHTML);

    // Log the number of accordion sections found
    const sections = block.querySelectorAll('.accordion-carousel-new > div[data-align="center"] > strong');
    console.log("Number of accordion sections:", sections.length);

    // Log each accordion section title
    sections.forEach((section, index) => {
        console.log(`Accordion section ${index + 1} title:`, section.textContent);
    });

    // Attach click event listeners to accordion section titles
    block.querySelectorAll('.accordion-carousel-new > div[data-align="center"]').forEach(category => {
        category.style.cursor = 'pointer';
        category.addEventListener('click', () => {
            const details = category.nextElementSibling;
            if (details.style.maxHeight) {
                details.style.maxHeight = null;  // Collapse details
            } else {
                details.style.maxHeight = details.scrollHeight + "px";  // Expand details
            }
        });
    });

    // Initially prepare all detail divs for animation
    block.querySelectorAll('.accordion-carousel-new > div > div').forEach(detail => {
        detail.style.maxHeight = "0px";  // Start collapsed
        detail.style.overflow = "hidden";
        detail.style.transition = "max-height 0.3s ease-out";  // Smooth transition for expanding and collapsing
    });
}
