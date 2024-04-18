export default function decorate(block) {
    console.log("Block contents:", block.innerHTML);

    // Select all category divs and attach click event listeners for toggling
    block.querySelectorAll("div > div:first-child").forEach(category => {
        category.style.cursor = 'pointer';
        category.addEventListener('click', () => {
            const details = category.nextElementSibling;
            details.style.display = details.style.display === 'none' ? '' : 'none';  // Toggle visibility
        });
    });

    // Initially hide all detail divs
    block.querySelectorAll("div > div:nth-child(2)").forEach(detail => {
        detail.style.display = 'none';
    });
}
