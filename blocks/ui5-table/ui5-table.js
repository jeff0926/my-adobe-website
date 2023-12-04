export default async function decorate(block) {
    console.log('uif-table-decorate called');

    const newDivElement = document.createElement('div');
    const rows = [...block.children];

    newDivElement.innerHTML = `<ui5-table></ui5-table>`;
    block.replaceWith(newDivElement);

    const table = newDivElement.querySelector('ui5-table');

    rows.forEach((row, rowIndex) => {
        const rowContent = [...row.children].map(col => col.textContent.trim());

        rowContent.forEach((cellContent, colIndex) => {
            if (rowIndex === 0) {
                // If it's the first row, create <ui5-table-column>
                const tableColumn = document.createElement('ui5-table-column');
                tableColumn.slot = `columns-${colIndex + 1}`;
                if (colIndex === 0) {
                    tableColumn.setAttribute('first', '');
                }
                tableColumn.textContent = cellContent;
                table.appendChild(tableColumn);
            } else {
                // If it's not the first row, create <ui5-table-cell>
                const tableCell = document.createElement('ui5-table-cell');
                tableCell.textContent = cellContent;
                table.appendChild(tableCell);
            }
        });
    });
}
