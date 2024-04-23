export default function decorate(block) {
    console.log('Decorating block...');

    const sections = block.querySelectorAll('.oli-tour > div');
    let currentMainSection = '';

    sections.forEach((section, index) => {
        const sectionType = section.querySelector('div:first-child');
        if (sectionType !== null) {
            currentMainSection = section.querySelector('div:nth-child(2)').textContent.trim();
            console.log(`${currentMainSection}`);
        } else {
            const description = section.querySelector('div:nth-child(2)').textContent.trim();
            console.log(`  Child of ${currentMainSection}: Step ${index + 1}:`);
            console.log(`    Description: ${description}`);

            const image = section.querySelector('div:nth-child(4) picture img').getAttribute('src');
            console.log(`    Image Path: ${image}`);

            const imageAlt = section.querySelector('div:nth-child(4) picture img').getAttribute('alt');
            console.log(`    Image Alt Text: ${imageAlt}`);
        }
    });

    console.log('Block decoration complete.');
}
