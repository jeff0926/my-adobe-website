document.addEventListener("DOMContentLoaded", function() {
    // Get the main container for the product tours
    var productTours = document.querySelector(".product-tourz");
    if (!productTours) {
        console.error("The .product-tourz element was not found.");
        return;
    }

    var sections = productTours.children;
    var data = [];

    for (var i = 0; i < sections.length; i++) {
        var sectionDivs = sections[i].children;
        if (!sectionDivs || sectionDivs.length < 4) {
            continue; // Skip if there are not enough elements within this section
        }

        var sectionName = sectionDivs[0].innerText.trim();
        var section = {
            name: sectionName,
            steps: []
        };

        var stepText = sectionDivs[1].innerText.trim();
        var imageElement = sectionDivs[2].querySelector('img');
        var imagePath = imageElement ? imageElement.src : "No image path";
        var imageAltText = imageElement ? imageElement.alt : "No alt text provided";

        var step = {
            'Step Text': stepText,
            'Image Path': imagePath,
            'Image Alt Text': imageAltText
        };

        section.steps.push(step);
        data.push(section);
    }

    // Log the structured data
    data.forEach(section => {
        console.log(section.name + ":");
        section.steps.forEach((step,index) => {
console.log(" Step " + (index + 1) + ":");
console.log(" Step Text: " + step['Step Text']);
console.log(" Image Path: " + step['Image Path']);
console.log(" Image Alt Text: " + step['Image Alt Text']);
});
});
});