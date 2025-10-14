function setupSaveHandler() {
  const saveButton = document.getElementById("saveImageButton");
  const wordInput = document.getElementById("wordInput");
  const croppieContainer = document.getElementById("upload-demo");

  if (!saveButton || !wordInput || !croppieContainer) {
    console.warn("Required elements not found.");
    return;
  }

  // Keep an array of saved objects
  const savedItems = [];

  // Attach Croppie instance to container (if not already attached)
  if (!croppieContainer.croppieInstance) {
    console.warn("Croppie instance not found on container.");
    return;
  }

  saveButton.addEventListener("click", async () => {
    const word = wordInput.value.trim();
    if (!word) {
      alert("Please enter a word before saving.");
      return;
    }

    // Access Croppie instance
    const croppieInstance = croppieContainer.croppieInstance;
    if (!croppieInstance) {
      alert("Croppie is not initialized.");
      return;
    }

    // Get cropped image as Base64
    const croppedImage = await croppieInstance.result({
      type: "base64",
      size: "viewport"
    });

    // Create object
    const item = {
      word: word,
      image: croppedImage,
      timestamp: Date.now()
    };

    // Add to saved items array
    savedItems.push(item);

    console.log("Saved item:", item);
    console.log("All saved items:", savedItems);

    // Optional: clear input after saving
    wordInput.value = "";
  });
}

export { setupSaveHandler };

