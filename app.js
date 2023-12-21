import { mouseMove } from './js/mouseMove.mjs';
import { fadeIn } from './js/fadeIn.mjs';
import { getModelLower } from './js/getModelLower.mjs';
import { resizeModels } from './js/resizeModels.mjs';
import { sceneLoaded } from './js/sceneLoaded.mjs';
import './js/addHTML.mjs';
import './js/showQR.mjs';
import './js/succOrErr.mjs';
import './js/stars.mjs';

AFRAME.registerComponent("mouse-move", mouseMove());
AFRAME.registerComponent('fade-in', fadeIn());
AFRAME.registerComponent("get-model-lower", getModelLower());
AFRAME.registerComponent('resize-models', resizeModels());
AFRAME.registerComponent('scene-loaded', sceneLoaded());