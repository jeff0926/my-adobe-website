ff // eslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');
//after ui5 library is ready inject ui5 button as a test
function create_ui5() {
alert("called");
  var htmlString = `
<ui5-card class="tile">
  <ui5-card-header slot="header" title-text="UI5-card with ui5-list + ui5-li" subtitle-text="Below ui5-list ui5-li" status="3 of 10">
    <ui5-icon name="group" slot="avatar"></ui5-icon>
    <ui5-button design="Transparent" slot="action" onclick="showAlert('Tile 6 UI5 CARD')">View All</ui5-button>
  </ui5-card-header>
  <div class="card-content">
    <ui5-list separators="None" class="card-content-child" style="width: 100%; margin-bottom: 0.75rem;">
      <ui5-li image="https://www.w3schools.com/howto/img_avatar2.png" description="User Researcher">Alain Chevalier</ui5-li>
      <ui5-li image="https://www.w3schools.com/howto/img_avatar.png" description="Artist">Monique Legrand</ui5-li>
      <ui5-li image="https://www.w3schools.com/howto/img_avatar2.png" description="UX Specialist">John Smith</ui5-li>
      <ui5-li image="https://www.w3schools.com/howto/img_avatar.png" description="UX Specialist">Isabella Adams</ui5-li>
    </ui5-list>
  </div>
</ui5-card>`;

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
    alert('Jeff C : UI5 webcomponent library initiated and available: You can now use the UI5 library and its functionality');
    console.log('External module has been imported successfully');
    create_ui5()
  } catch (error) {
    console.error('Failed to import the external module:', error);
  }
}
// add more delayed functionality here
importExternalModule();
