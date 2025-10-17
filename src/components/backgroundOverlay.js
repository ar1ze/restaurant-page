import { PAGE_BACKGROUNDS } from '../constants/pageBackgrounds';
import * as dom from '../utils/dom';

export function applyBackgroundOverlay(page) {
  const body = document.body;
  const background = PAGE_BACKGROUNDS[page];

  body.style.backgroundImage = `url('${background.url}')`;

  let overlay = dom.getElement('.overlay');

  if (!overlay) {
    overlay = dom.createElement('div', 'overlay');
    body.appendChild(overlay);
  }

  overlay.style.backgroundColor = `rgba(0, 0, 0, ${background.opacity})`;
}
