let croppieInstance = null;

function makeCroppable() {
    const image = document.getElementById("croppableImage");
    if (!image) return;

    const croppieContainer = document.createElement("div");
    croppieContainer.id = "upload-demo";
    image.replaceWith(croppieContainer);

    croppieInstance = new Croppie(croppieContainer, {
        enableExif: true,
        viewport: { width: 200, height: 200, type: "square" },
        boundary: { width: 300, height: 300 },
    });

    croppieInstance.bind({ url: image.src });
}

export { makeCroppable };

