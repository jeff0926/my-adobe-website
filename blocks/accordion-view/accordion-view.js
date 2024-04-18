document.addEventListener('DOMContentLoaded', () => {
    const accordionBlocks = document.querySelectorAll('.accordion-view');

    accordionBlocks.forEach(block => {
        block.querySelectorAll('div > div:first-child').forEach(category => {
            category.setAttribute('aria-expanded', 'false');
            category.addEventListener('click', function() {
                const details = this.nextElementSibling;
                const isExpanded = this.getAttribute('aria-expanded') === 'true';

                // Collapse all other details
                block.querySelectorAll('div > div:nth-child(2)').forEach(d => {
                    if (d !== details) {
                        d.style.maxHeight = null;
                        d.previousElementSibling.setAttribute('aria-expanded', 'false');
                    }
                });

                // Toggle the current detail view
                if (isExpanded) {
                    details.style.maxHeight = null;
                    this.setAttribute('aria-expanded', 'false');
                } else {
                    details.style.maxHeight = details.scrollHeight + "px";
                    this.setAttribute('aria-expanded', 'true');
                }
            });
        });
    });
});
