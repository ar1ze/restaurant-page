import './scss/main.scss';

import { PAGE_HOME, PAGE_MENU } from './constants/pages';

import { applyBackgroundOverlay } from './components/backgroundOverlay';
import { createNav } from './components/navBar';

import { createHomePage } from './pages/homePage';
import { createAtmospherePage } from './pages/atmospherePage';

import { getElement } from './utils/dom';

let currentPage = PAGE_MENU;
applyBackgroundOverlay(currentPage);

const header = getElement('.header');
const main = getElement('.main');

const nav = createNav(currentPage);
const home = createHomePage();
const atmosphere = createAtmospherePage();

header.append(nav);
main.append(atmosphere);
