// Find the product-tour-component div
const productTourComponentDiv = document.querySelector('.product-tour-component');

// Create the product-tour-component element
const productTourComponent = document.createElement('product-tour-component');
productTourComponent.setAttribute('data-url', 'https://raw.githubusercontent.com/jeff0926/cdn-deliver/main/integrated-business-planning.json');

// Create the script element to load product-tour-component.js
const scriptElement = document.createElement('script');
scriptElement.src = 'https://main--my-adobe-website--jeff0926.hlx.page/blocks/product-tour-component/product-tour-component-build.js';
scriptElement.defer = true;

// Insert product-tour-component and scriptElement after the product-tour-component div
productTourComponentDiv.parentNode.insertBefore(productTourComponent, productTourComponentDiv.nextSibling);
productTourComponentDiv.parentNode.insertBefore(scriptElement, productTourComponentDiv.nextSibling);
