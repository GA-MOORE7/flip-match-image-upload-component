function createFrame(numberOfFrames) {

    const frameContainer = document.getElementById("frameContainer");

    for (let i = 0; i < numberOfFrames; i++) {
        const frame = document.createElement("div");
        frame.classList.add("frame");
        frame.id = `frame-${i + 1}`; 
        frame.textContent =  "+";
        frameContainer.appendChild(frame);
    }

}

export { createFrame };