import { createAtmosphereCard } from '../components/atmosphereCard';
import { createElement } from '../utils/dom';

import interiorImg from '../assets/images/backgrounds/interior.jpg';
import phoImg from '../assets/images/dishes/pho.jpg';
import coffeeImg from '../assets/images/dishes/coffee.jpg';
import herbsImg from '../assets/images/gallery/herbs.jpg';
import banhMiImg from '../assets/images/dishes/baguette.jpg';
import decorImg from '../assets/images/gallery/decoration.jpg';

export function createAtmospherePage() {
  const section = createElement('section', 'atmosphere');

  const heading = createElement('h2', 'atmosphere__heading', 'Our Atmosphere');
  const grid = createElement('div', 'atmosphere__grid');
  const cards = [
    {
      src: interiorImg,
      alt: 'Warm lanterns hanging in the restaurant interior',
      caption: 'Interior',
      description: 'Warm, cozy dining space.',
    },
    {
      src: phoImg,
      alt: 'A close-up of a steaming bowl of Vietnamese Phở',
      caption: 'Fresh Phở',
      description: 'Rich broth, fresh flavor.',
    },
    {
      src: coffeeImg,
      alt: 'Vietnamese coffee dripping through a traditional phin filter',
      caption: 'Coffee Bar',
      description: 'Slow-dripped Vietnamese coffee.',
    },
    {
      src: herbsImg,
      alt: 'A platter of fresh Vietnamese herbs like mint and basil',
      caption: 'Fresh Herbs',
      description: 'Aromatic, vibrant ingredients.',
    },
    {
      src: banhMiImg,
      alt: 'A freshly made Bánh Mì sandwich on a wooden board',
      caption: 'Bánh Mì',
      description: 'Crispy, savory perfection.',
    },
    {
      src: decorImg,
      alt: 'Close-up of Vietnamese-style decor details in the restaurant',
      caption: 'Decor',
      description: 'Timeless Vietnamese design.',
    },
  ];

  cards.forEach((card) => {
    grid.appendChild(
      createAtmosphereCard(card.src, card.alt, card.caption, card.description)
    );
  });

  section.append(heading, grid);

  return section;
}
