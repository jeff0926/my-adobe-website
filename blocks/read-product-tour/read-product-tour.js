export default function decorate(block) {
    // Find the table element
    const table = block.querySelector('table');

    // Initialize variables to store title and data-url values
    let title = '';
    let dataUrl = '';

    // Iterate through each row in the table
    const rows = table.querySelectorAll('tr');
    rows.forEach(row => {
        // Get cells in the current row
        const cells = row.querySelectorAll('td');

        // Extract title and data-url values
        const label = cells[0].textContent.trim();
        const value = cells[1].textContent.trim();

        // Check label and assign value accordingly
        if (label === 'Title') {
            title = value;
        } else if (label === 'data-url') {
            dataUrl = value;
        }
    });

    // Find the product-tour-component div
    const productTourComponentDiv = document.querySelector('.product-tour-component');

    // Create the product-tour-component element
    const productTourComponent = document.createElement('product-tour-component');
    productTourComponent.setAttribute('data-url', dataUrl);

    // Create the script element to load product-tour-component.js
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://main--my-adobe-website--jeff0926.hlx.page/blocks/product-tour-component/product-tour-component-build.js';
    scriptElement.defer = true;

    // Insert product-tour-component and scriptElement after the product-tour-component div
    productTourComponentDiv.parentNode.insertBefore(productTourComponent, productTourComponentDiv.nextSibling);
    productTourComponentDiv.parentNode.insertBefore(scriptElement, productTourComponentDiv.nextSibling);
}
