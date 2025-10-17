function displaySavedItems(savedItems) {
  const frameContainer = document.getElementById("frameContainer");
  if (!frameContainer) {
    console.warn("#frameContainer not found.");
    return;
  }

  // 🔹 Remove existing table if present (for refresh)
  let existingTable = document.getElementById("savedItemsTable");
  if (existingTable) {
    existingTable.remove();
  }

  // 🔹 Wrapper for table content
  const tableWrapper = document.createElement("div");
  tableWrapper.id = "savedItemsTable";
  tableWrapper.style.marginTop = "20px";
  tableWrapper.style.width = "100%";
  tableWrapper.style.display = "flex";
  tableWrapper.style.justifyContent = "center";

  // 🔹 Table element
  const table = document.createElement("table");
  table.style.width = "90%";
  table.style.borderCollapse = "collapse";
  table.style.margin = "0 auto";
  table.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
  table.style.borderRadius = "10px";
  table.style.overflow = "hidden";
  table.style.backgroundColor = "#fefefe";
  table.style.fontFamily = "Arial, sans-serif";

  // Header row
  const header = document.createElement("tr");
  ["#", "Word", "Image"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.padding = "10px";
    th.style.backgroundColor = "#c5ecf6";
    th.style.borderBottom = "2px solid #ddd";
    header.appendChild(th);
  });
  table.appendChild(header);

  // Rows for saved items
  savedItems.forEach((item, index) => {
    const row = document.createElement("tr");
    row.style.transition = "background-color 0.2s";
    row.addEventListener("mouseenter", () => (row.style.backgroundColor = "#f0f9ff"));
    row.addEventListener("mouseleave", () => (row.style.backgroundColor = "white"));

    const numCell = document.createElement("td");
    numCell.textContent = index + 1;
    numCell.style.textAlign = "center";
    numCell.style.padding = "8px";

    const wordCell = document.createElement("td");
    wordCell.textContent = item.word;
    wordCell.style.textAlign = "center";
    wordCell.style.padding = "8px";

    const imgCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = item.image;
    img.style.width = "60px";
    img.style.height = "60px";
    img.style.borderRadius = "8px";
    img.style.objectFit = "cover";
    imgCell.style.textAlign = "center";
    imgCell.style.padding = "8px";
    imgCell.appendChild(img);

    [numCell, wordCell, imgCell].forEach(cell => {
      cell.style.borderBottom = "1px solid #ddd";
    });

    row.appendChild(numCell);
    row.appendChild(wordCell);
    row.appendChild(imgCell);
    table.appendChild(row);
  });

  tableWrapper.appendChild(table);

  // 🔹 Ensure table appears BEFORE the frame
  const frameWrapper = document.getElementById("frameWrapper");
  if (frameWrapper) {
    frameContainer.insertBefore(tableWrapper, frameWrapper);
  } else {
    frameContainer.appendChild(tableWrapper);
  }

  // 🔹 Stack table and frame vertically and center them
  frameContainer.style.display = "flex";
  frameContainer.style.flexDirection = "column";
  frameContainer.style.alignItems = "center";
  frameContainer.style.gap = "10px"; // small space between table and frame

  // 🔹 Resize the frame based on whether items exist
  const frame = frameContainer.querySelector(".frame");
  if (frame) {
    if (savedItems.length > 0) {
      // Smaller when items exist
      frame.style.width = "120px";
      frame.style.height = "120px";
      frame.style.fontSize = "50px";
      frame.style.transition = "all 0.3s ease";
    } else {
      // Reset to original size when no items
      frame.style.width = "200px";
      frame.style.height = "200px";
      frame.style.fontSize = "70px";
    }
  }
}

export { displaySavedItems };





