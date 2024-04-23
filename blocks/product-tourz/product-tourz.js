// product-tourz.js
document.addEventListener("DOMContentLoaded", function() {
    const productTourz = document.querySelector('.product-tourz');
    if (productTourz) {
        const divs = productTourz.querySelectorAll('div');
        alert('Number of divs: ' + divs.length);
    } else {
        alert('No product-tourz element found.');
    }
});
