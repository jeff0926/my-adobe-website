// Create the product-tour-component element with data-url attribute
const productTourComponent = document.createElement('product-tour-component');
productTourComponent.setAttribute('data-url', 'https://raw.githubusercontent.com/jeff0926/cdn-deliver/main/integrated-business-planning.json');

// Create the script element to load product-tour-component.js
const scriptElement = document.createElement('script');
scriptElement.src = './product-tour-component-build.js';
scriptElement.defer = true;

// Append elements to the document body
document.body.appendChild(productTourComponent);
document.body.appendChild(scriptElement);