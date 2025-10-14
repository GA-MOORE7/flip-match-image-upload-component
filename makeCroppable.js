let croppieInstance = null;

function makeCroppable() {
    const image = document.getElementById("croppableImage");
    if (!image) return;

    // Create Croppie container and replace the image
    const croppieContainer = document.createElement("div");
    croppieContainer.id = "upload-demo";
    image.replaceWith(croppieContainer);

    // Initialize Croppie
    croppieInstance = new Croppie(croppieContainer, {
        enableExif: true,
        viewport: { width: 200, height: 200, type: "square" },
        boundary: { width: 300, height: 300 },
    });

    croppieInstance.bind({ url: image.src });

    return croppieInstance;
}

// Getter to retrieve the current Croppie instance
function getCroppieInstance() {
    return croppieInstance;
}

export { makeCroppable, getCroppieInstance };


