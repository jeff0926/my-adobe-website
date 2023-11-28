// ffeslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');
//after ui5 library is ready inject ui5 button as a test
function create_ui5() {
alert("called create_ui5()");
  var htmlString = ' <ui5-carousel>
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Landscape 1">
        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Landscape 2">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Bulb">
    </ui5-carousel>';

  // Find the element by its class (assuming the class is "cards ui5-button")
  console.log('creating ui5-button into div cards.ui5-button ');
  var targetDiv = document.querySelector('div.cards.ui5-button');
  // JC: trying ot grab an entire block and output to console - test
  
  // Define the new HTML content
  var newContent = htmlString;
 

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
  alert('importExternalModule');
  try {
    const module = await import('https://sap.github.io/ui5-webcomponents/assets/js/ui5-webcomponents/bundle.esm.js');
    //https://ui5.sap.com/resources/sap-ui-core.js
    //https://sap.github.io/ui5-webcomponents/assets/js/ui5-webcomponents/bundle.esm.js
    //alert('Jeff C : UI5 webcomponent library initiated and available: You can now use the UI5 library and its functionality');
    console.log('External module has been imported successfully');
    create_ui5()
  } catch (error) {
    console.error('Failed to import the external module:', error);
  }
}
// add more delayed functionality here
importExternalModule();
