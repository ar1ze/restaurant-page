import './scss/main.scss';

import { NAV_LINKS } from './constants/navLinks';
import { createNav } from './components/nav';
import { createHomePage } from './pages/home';
import { getElement } from './utils/dom';

const header = getElement('.header');
const main = getElement('.main');

const nav = createNav(NAV_LINKS.HOME);
const home = createHomePage(main);

header.appendChild(nav);
main.appendChild(home);
