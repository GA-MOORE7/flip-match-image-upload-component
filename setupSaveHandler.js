import { getCroppieInstance } from "./makeCroppable.js";

// Persistent array to store all saved items
const savedItems = [];

function setupSaveHandler() {
    const saveButton = document.getElementById("saveImageButton");
    const wordInput = document.getElementById("wordInput");

    if (!saveButton || !wordInput) {
        console.warn("Required elements not found.");
        return;
    }

    saveButton.addEventListener("click", async () => {
        const word = wordInput.value.trim();
        if (!word) {
            alert("Please enter a word before saving.");
            return;
        }

        const croppieInstance = getCroppieInstance();
        if (!croppieInstance) {
            alert("Croppie is not initialized.");
            return;
        }

        // Export cropped image as Base64
        const croppedImage = await croppieInstance.result({
            type: "base64",
            size: "viewport"
        });

        // Create object with word + image
        const item = {
            word: word,
            image: croppedImage,
            timestamp: Date.now()
        };

        // Push to persistent array
        savedItems.push(item);

        console.log("Saved item:", item);
        console.log("All saved items:", savedItems);

        // Clear input for next entry
        wordInput.value = "";
    });
}

export { setupSaveHandler, savedItems };

