export default function decorate(block) {
  if (block.type === 'reverse-card') {
    block.children.forEach((row, rowIndex) => {
      row.children.forEach((col, colIndex) => {
        col.style.flex = '0 0 100%'; // Set width for each slide
        col.style.transition = 'transform 0.5s ease-in-out'; // Smooth transition
        
        // Apply class names for initial positioning (optional)
        col.classList.add(rowIndex === 0 ? 'active' : 'inactive'); // Example
      });
    });
  }
}
