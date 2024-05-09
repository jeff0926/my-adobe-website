 const productTourDiv = document.querySelector('.product-tour div div');

    if (productTourDiv) {
        const urlValue = productTourDiv.textContent.trim(); // Store the original content

        // Alert the content for verification (optional)
        alert(urlValue);

        // Clear the content of the div after storing its value
        productTourDiv.textContent = '';

        // Create the product-tour element
        const productTour = document.createElement('product-tour');
        productTour.setAttribute('data-config', urlValue); // Using the fetched text as data-config
        productTour.setAttribute('url-prefix', 'https://main--hlx-test--urfuwo.hlx.page');
        
        // Create the script element for the product-tour JavaScript
        const script = document.createElement('script');
        script.src = 'https://cdn.udex.services.sap.com/dxf/latest/product-tour/product-tour.js';

        // Determine the appropriate parent to append to
        // If productTourDiv.parentNode is not suitable, choose a different ancestor
        const appendTarget = productTourDiv.parentNode;

        // Append both the product-tour and script elements to the determined parent
        appendTarget.appendChild(productTour);
        appendTarget.appendChild(script);
    } else {
        console.error('Product tour URL not found.');
    }