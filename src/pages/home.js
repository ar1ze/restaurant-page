import { createElement } from '../utils/dom';

export function createHomePage() {
  const hero = createElement('section', 'hero');

  const title = createElement(
    'h1',
    'hero__title',
    'Authentic Flavors, Modern Vibe'
  );

  const tagline = createElement('p', 'hero__tagline');
  const line1 = createElement(
    'span',
    '',
    'Experience the heart of Saigon with our signature Pho, Banh Mi, and'
  );
  const line2 = createElement('span', '', 'artisanal Vietnamese coffee.');

  tagline.append(line1, line2);

  hero.append(title, tagline);

  return hero;
}
