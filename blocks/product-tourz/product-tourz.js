export default function decorate(block) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('enter');
            }
        });
    });

    const sections = block.querySelectorAll(':scope > div');

    let currentMainSection = '';

    sections.forEach((section, index) => {
        const sectionType = section.querySelector('div:first-child');
        if (sectionType !== null) {
            currentMainSection = section.querySelector('div:nth-child(2)').textContent.trim();
            console.log(`Main section: ${currentMainSection}`);
        } else {
            const description = section.querySelector('div:nth-child(2)').textContent.trim();
            console.log(`  Child of ${currentMainSection}: Step ${index + 1}:`);
            console.log(`    Description: ${description}`);

            const image = section.querySelector('div:nth-child(4) picture img').getAttribute('src');
            console.log(`    Image Path: ${image}`);

            const imageAlt = section.querySelector('div:nth-child(4) picture img').getAttribute('alt');
            console.log(`    Image Alt Text: ${imageAlt}`);

            observer.observe(section);
        }
    });
}
