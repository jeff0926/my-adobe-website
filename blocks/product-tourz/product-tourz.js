// Get the product-tourz container
var productTourz = document.querySelector(".product-tourz");
var sections = productTourz.children;
var data = [];
var currentSection = {};

// Iterate through each main div assumed to represent a different product tour step
for (var i = 0; i < sections.length; i++) {
    var elements = sections[i].children; // Get the child elements of the current section
    if (elements[0] && elements[1] && elements[2] && elements[3]) {
        var sectionData = {
            'Step Title': elements[0].innerText.trim(),
            'Step Description': elements[1].innerText.trim(),
            'Image Detail': {
                'imgPath': elements[2].querySelector('img').src,
                'imgAltText': elements[2].querySelector('img').alt
            },
            'Additional Description': elements[3].innerText.trim()
        };
        data.push(sectionData);
    }
}

// Output the data
console.log(data);
