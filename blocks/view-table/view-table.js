export default function decorate(block) {
    // Debugging to see what's inside the block
    console.log("Block contents:", block.innerHTML);

    // Assuming the table is directly within the block
    const table = block.querySelector("table");

    if (!table) {
        console.error('No table found in the block.');
        return;
    }

    table.querySelectorAll("tr").forEach((row, rowIndex) => {
        console.log(`Row ${rowIndex}:`);
        row.querySelectorAll("td, th").forEach((cell, cellIndex) => {
            console.log(`  Cell ${cellIndex}: Text = '${cell.innerText}', HTML = '${cell.innerHTML}'`);
        });
    });
}
