export default function decorate(block) {
    // Assuming 'block' is the table or contains the table
    const table = block.querySelector("table"); // Adjust the selector as needed based on actual structure

    if (!table) {
        console.error('No table found in the block.');
        return;
    }

    console.log("Table found, iterating rows:");
    table.querySelectorAll("tr").forEach((row, rowIndex) => {
        console.log(`Row ${rowIndex}:`);
        row.querySelectorAll("td, th").forEach((cell, cellIndex) => {
            console.log(`  Cell ${cellIndex}: Text = '${cell.innerText}', HTML = '${cell.innerHTML}'`);
        });
    });
}
