export default function decorate(block) {
    // Get all direct children of the block (assuming rows)
    const rows = [...block.children];
  
    // Check if the first row has 4 columns (including merged cell)
    if (rows.length > 0 && rows[0].children.length !== 4) {
      console.warn("Expected table with 4 columns in the first row!");
      return; // Handle the case where the table doesn't have 4 columns in the first row
    }
  
    // Add class based on column count (assuming merged cell counts as a column)
    block.classList.add(`columns-4-cols`);
  
    rows.forEach((row) => {
      // Extract content from the first 2 columns (assuming merged cell is first)
      const content1 = row.children[0].textContent.trim(); // Content from first column (merged cell)
      const content2 = row.children[1].textContent.trim(); // Content from second column
  
      // Create and append new columns with duplicated content
      for (let i = 2; i < 4; i++) {
        const newCol = document.createElement('div');
        newCol.textContent = content1; // Use content from first column
  
        // Optional: Add additional logic to populate content2 if needed (e.g., for buttons)
        // newCol.append(content2); // Uncomment if using content from second column
  
        row.append(newCol);
      }
    });
  
    // Existing image column styling logic (optional modifications might be needed)
    [...block.children].forEach((row) => {
      [...row.children].forEach((col) => {
        const pic = col.querySelector('picture');
        if (pic) {
          const picWrapper = pic.closest('div');
          if (picWrapper && picWrapper.children.length === 1) {
            picWrapper.classList.add('columns-img-col');
          }
        }
      });
    });
  }
  