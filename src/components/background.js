import { PAGE_BACKGROUNDS } from '../constants/pageBackgrounds';
import { getBody } from '../utils/dom';

export function applyBackgroundOverlay(page) {
  const body = document.body;
  const background = PAGE_BACKGROUNDS[page];

  // Body
  body.style.position = 'relative';
  body.style.display = 'flex';
  body.style.flexDirection = 'column';

  // Background image
  body.style.backgroundImage = `url('${background.url}')`;
  body.style.backgroundPosition = 'center';
  body.style.backgroundSize = 'cover';
  body.style.backgroundRepeat = 'no-repeat';
  body.style.zIndex = '-2';

  // Overlay
  let overlay = document.createElement('div');
  overlay.style.content = "''";
  overlay.style.position = 'absolute';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = `rgba(0, 0, 0, ${background.opacity})`;
  overlay.style.zIndex = '-1';
  overlay.style.pointerEvents = 'none';

  body.appendChild(overlay);
}
