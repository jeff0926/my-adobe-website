export default async function decorate(block) {
    const rows = [...block.children];
    const ui5List = document.createElement('ui5-list');
    block.replaceWith(ui5List);

    const attributeNames = getRowValues(rows[0]);

    rows.slice(1).forEach((row, rowIndex) => {
        const liElement = document.createElement('ui5-li');

        const attributeValues = getRowValues(row);
        attributeNames.forEach((attributeName, columnIndex) => {
            const cleanedAttributeName = attributeName.replace(/["“”=]/g, '');
            if (cleanedAttributeName.toLowerCase() !== 'title') {
                // Set all attributes except "title"
                liElement.setAttribute(cleanedAttributeName, attributeValues[columnIndex]);
            }
        });

        // Move the value of the "title" column just before the ending </ui5-li> tag
        liElement.textContent = attributeValues[attributeNames.indexOf('title')];
        ui5List.appendChild(liElement);
    });
}

function getRowValues(row) {
    return [...row.children].map(col => col.textContent.trim().replace(/<\/?code>/g, ''));
}
