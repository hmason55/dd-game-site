import { audioPlayer } from './audio.mjs';
import { initLoadingMessages } from './loading.mjs';
import * as animations from './animations.mjs';
import { particleSystem } from './particles.mjs';
import * as map from './map.mjs';
import * as utils from './utils.mjs';
import { initCardTilt, setCardTiltEnabled, isCardTiltEnabled } from './card-tilt.mjs';

window.audioPlayer = audioPlayer;
Object.assign(window, animations);
window.particleSystem = particleSystem;
Object.assign(window, map);
Object.assign(window, utils);
window.setCardTiltEnabled = setCardTiltEnabled;
window.isCardTiltEnabled = isCardTiltEnabled;

initLoadingMessages();
initCardTilt();
