// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');
//JC : import SAP UI5 <webcomponents>  
// Define an async function to import the external module
async function importExternalModule() {
  try {
    const module = await import('https://sap.github.io/ui5-webcomponents/assets/js/ui5-webcomponents/bundle.esm.js');
    alert('You can now use the module and its functionality');
    console.log('External module has been imported successfully');
  } catch (error) {
    console.error('Failed to import the external module:', error);
  }
}
// add more delayed functionality here
importExternalModule();
