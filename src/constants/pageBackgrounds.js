import { PAGE_HOME, PAGE_MENU, PAGE_OUR_STORY } from './pages';

import heroImg from '../assets/images/backgrounds/hero.jpg';
import interiorImg from '../assets/images/backgrounds/interior.jpg';
import cookingImg from '../assets/images/backgrounds/cooking.jpg';

export const PAGE_BACKGROUNDS = {
  [PAGE_HOME]: {
    url: heroImg,
    opacity: 0.45,
  },
  [PAGE_MENU]: {
    url: interiorImg,
    opacity: 0.9,
  },
  [PAGE_OUR_STORY]: {
    url: cookingImg,
    opacity: 0.8,
  },
};
