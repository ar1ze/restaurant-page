import { applyParallax } from '../utils/parallax';
import { createElement } from '../utils/dom';

export function createAtmosphereCard(src, alt, caption, description) {
  const article = createElement('article', 'atmosphere__card');

  const img = createElement('img', 'atmosphere__image');
  img.src = src;
  img.alt = alt;

  const overlay = createElement('div', 'atmosphere__overlay');
  const span = createElement('span', 'atmosphere__caption', caption);
  const p = createElement('p', 'atmosphere__description', description);

  overlay.append(span, p);
  article.append(img, overlay);

  applyParallax(article, img, 1, 1.1);

  return article;
}
