export default async function decorate(block) {
    
    const rows = [...block.children];
        rows.forEach((row, rowIndex) => {
            console.log(`Row ${rowIndex + 1}:`);
        [...row.children].forEach((col, colIndex) => {
            console.log(`  - Column ${colIndex + 1}: ${col.textContent}`);
    })
})
    
}