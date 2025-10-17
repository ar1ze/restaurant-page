import './scss/main.scss';

import { PAGE_HOME } from './constants/pages';

import { applyBackgroundOverlay } from './components/background';
import { createNav } from './components/nav';

import { createHomePage } from './pages/home';

import { getElement } from './utils/dom';

let currentPage = PAGE_HOME;
applyBackgroundOverlay(currentPage);

const header = getElement('.header');
const main = getElement('.main');

const nav = createNav(currentPage);
const home = createHomePage(main);

header.appendChild(nav);
main.appendChild(home);
