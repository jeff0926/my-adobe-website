// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');
//after ui5 library is ready inject ui5 button as a test
function create_ui5() {
  // Find the element by its class (assuming the class is "cards ui5-button")
  console.log('creating ui5-button into div cards.ui5-button ');
  var targetDiv = document.querySelector('div.cards.ui5-button');

  // Define the new HTML content
  var newContent = '<div class="cards ui5-button"><ui5-button design="Transparent">View All</ui5-button></div>';

  // Add the new HTML content to the existing content
  if (targetDiv) {
    console.log('found the div...');
    targetDiv.innerHTML = newContent;
  } else {
    console.log('Target div element not found.');
  }
}
// Call the create_ui5 function to add the HTML content to the specified div
//create_ui5();

//JC : import SAP UI5 <webcomponents>  
// Define an async function to import the external module
async function importExternalModule() {
  try {
    const module = await import('https://sap.github.io/ui5-webcomponents/assets/js/ui5-webcomponents/bundle.esm.js');
    alert('You can now use the module and its functionality');
    console.log('External module has been imported successfully');
    create_ui5()
  } catch (error) {
    console.error('Failed to import the external module:', error);
  }
}
// add more delayed functionality here
importExternalModule();
