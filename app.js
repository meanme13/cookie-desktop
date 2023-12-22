import { mouseMove } from './js/mouseMove.mjs';
import { fadeIn } from './js/fadeIn.mjs';
import { resizeModels } from './js/resizeModels.mjs';
import { sceneLoaded } from './js/sceneLoaded.mjs';
import { hideOnPlay } from './js/videoSettings.mjs';
import { playOnClick } from './js/videoSettings.mjs';
import './js/addHTML.mjs';
import './js/showQR.mjs';
import './js/succOrErr.mjs';
import './js/stars.mjs';

AFRAME.registerComponent("mouse-move", mouseMove());
AFRAME.registerComponent('fade-in', fadeIn());
AFRAME.registerComponent('resize-models', resizeModels());
AFRAME.registerComponent('scene-loaded', sceneLoaded());
AFRAME.registerComponent('play-on-click', playOnClick());
AFRAME.registerComponent('hide-on-play', hideOnPlay());