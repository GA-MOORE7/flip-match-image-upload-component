import { createFrame } from "./frameMaker.js";
import { initializeImageUpload } from "./uploadImage.js";
import { makeCroppable } from "./makeCroppable.js";
import { addSaveButton } from "./addSaveButton.js";
import { addWordInput } from "./addWordInput.js";
import { setupSaveHandler } from "./setupSaveHandler.js";

createFrame(1);

initializeImageUpload(() => {
  makeCroppable();      // replaces only the image, keeps button/input
  addSaveButton();      // ensure button exists
  addWordInput();       // ensure input exists above button
  setupSaveHandler();   // now elements exist, attach click handler
});








