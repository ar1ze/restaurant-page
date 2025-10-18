import * as dom from '../utils/dom';

import harvestingImg from '../assets/images/story/harvest.jpg';
import craftingImg from '../assets/images/story/craft.jpg';
import cookingImg from '../assets/images/story/cooking.jpg';
import gatheringImg from '../assets/images/story/gathering.jpg';

const STORY_HEADING_LINE_1 = 'Our Story: From Saigon,';
const STORY_HEADING_LINE_2 = 'With Love';

const STORY_PARAGRAPHS = [
  {
    text: 'The Saigon Social was born from a simple dream: to share the authentic, comforting flavors of our family’s kitchen with our community. Our journey began in Saigon, where our grandmother taught us the art of balancing sweet, sour, salty, and spicy – the heart of Vietnamese cuisine.',
    className: 'story__text',
  },
  {
    text: 'Every recipe is a cherished memory, every ingredient is chosen with care, and every meal is an invitation to gather and share in the joy of food. This is more than a restaurant; it’s our heritage, served on a plate.',
    className: 'story__text',
  },
];

const STORY_IMAGES = [
  {
    src: harvestingImg,
    alt: 'Fresh Vietnamese herbs and limes at an outdoor market',
  },
  {
    src: craftingImg,
    alt: 'Hands carefully rolling fresh spring rolls',
  },
  {
    src: cookingImg,
    alt: 'Steaming hotpot on a traditional clay stove',
  },
  {
    src: gatheringImg,
    alt: 'Friends laughing and sharing a large meal together at the restaurant',
  },
];

export function createStoryPage() {
  const storySection = dom.createElement('section', 'story');
  const storyGrid = dom.createElement('div', 'story__grid');
  storySection.append(storyGrid);

  const contentBody = dom.createElement('div', 'story__body');
  const contentDiv = dom.createElement('div', 'story__content');
  const heading = dom.createElement('h2', 'story__heading');
  const paragraphs = dom.createElement('div', 'story__paragraph');

  const headingLinePrimary = dom.createElement(
    'span',
    '',
    STORY_HEADING_LINE_1
  );
  const headingLineSecondary = dom.createElement(
    'span',
    '',
    STORY_HEADING_LINE_2
  );

  STORY_PARAGRAPHS.forEach(({ text, className }) => {
    const p = dom.createElement('p', className, text);
    paragraphs.append(p);
  });

  heading.append(headingLinePrimary, headingLineSecondary);
  contentDiv.append(heading, paragraphs);
  contentBody.append(contentDiv);

  const galleryDiv = dom.createElement('div', 'story__gallery');

  STORY_IMAGES.forEach(({ src, alt }) => {
    const img = dom.createElement('img', 'story__image');
    img.src = src;
    img.alt = alt;
    galleryDiv.append(img);
  });

  storyGrid.append(contentBody, galleryDiv);

  return storySection;
}
