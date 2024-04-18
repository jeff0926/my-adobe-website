export default function decorate(block) {
    console.log("Block contents:", block.innerHTML);

    block.querySelectorAll("div > div:first-child").forEach(category => {
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
    block.querySelectorAll("div > div:nth-child(2)").forEach(detail => {
        detail.style.maxHeight = "0px";  // Start collapsed
        detail.style.overflow = "hidden";
        detail.style.transition = "max-height 0.3s ease-out";  // Smooth transition for expanding and collapsing
    });
}
