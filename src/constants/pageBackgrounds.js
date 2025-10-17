import { PAGE_HOME, PAGE_MENU, PAGE_STORY } from './pages';

import heroImg from '../assets/images/gallery/hero.jpg';
import interiorImg from '../assets/images/gallery/interior.jpg';
import cookingImg from '../assets/images/story/cooking.jpg';

export const PAGE_BACKGROUNDS = {
  [PAGE_HOME]: {
    url: heroImg,
    opacity: 0.45,
  },
  [PAGE_MENU]: {
    url: interiorImg,
    opacity: 0.9,
  },
  [PAGE_STORY]: {
    url: cookingImg,
    opacity: 0.8,
  },
};
