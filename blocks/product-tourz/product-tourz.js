// Get the main container for the product tours
var productTours = document.querySelector(".product-tourz");
var sections = productTours.children;

// Prepare to store and display the data
var data = [];

for (var i = 0; i < sections.length; i++) {
    var sectionDivs = sections[i].children;
    var sectionName = sectionDivs[0].innerText.trim();
    
    // Initialize section object
    var section = {
        name: sectionName,
        steps: []
    };

    // Assume only one step per section in this HTML structure
    var step = {
        'Step Text': sectionDivs[1].innerText.trim(),
        'Image Path': sectionDivs[2].querySelector('img').src,
        'Image Alt Text': sectionDivs[2].querySelector('img').alt || "No alt text provided"
    };
    
    // Add step to section
    section.steps.push(step);
    data.push(section);
}

// Log the structured data
data.forEach(section => {
    console.log(section.name + ":");
    section.steps.forEach((step, index) => {
        console.log("  Step " + (index + 1) + ":");
        console.log("    Step Text: " + step['Step Text']);
        console.log("    Image Path: " + step['Image Path']);
        console.log("    Image Alt Text: " + step['Image Alt Text']);
    });
});
