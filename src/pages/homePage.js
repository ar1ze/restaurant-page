import * as dom from '../utils/dom';

export function createHomePage() {
  const hero = dom.createElement('section', 'hero');

  const title = dom.createElement(
    'h1',
    'hero__title',
    'Authentic Flavors, Modern Vibe'
  );

  const tagline = dom.createElement('p', 'hero__tagline');
  const line1 = dom.createElement(
    'span',
    '',
    'Experience the heart of Saigon with our signature Pho, Banh Mi, and'
  );
  const line2 = dom.createElement('span', '', 'artisanal Vietnamese coffee.');

  tagline.append(line1, line2);
  hero.append(title, tagline);

  return hero;
}
