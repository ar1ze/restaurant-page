import { NAV_LINKS } from '../constants/navLinks';
import { createElement } from '../utils/dom';

export function createNav(activePage = NAV_LINKS.HOME) {
  const nav = createElement('nav', 'header__nav');

  const logo = createElement('span', 'header__logo', 'The Saigon Social');

  const navItems = createElement('div', 'header__nav-items');
  const navLinks = createElement('div', 'header__nav-links');

  const createNavButton = (id, label) => {
    const isActive = activePage === id;
    const className = `nav-link${isActive ? ' nav-link--active' : ''}`;
    const button = createElement('button', className, label);
    button.id = `${id}-btn`;
    return button;
  };

  const homeBtn = createNavButton(NAV_LINKS.HOME, 'Home');
  const menuBtn = createNavButton(NAV_LINKS.MENU, 'Meny');
  const ourStoryBtn = createNavButton(NAV_LINKS.OUR_STORY, 'Our Story');

  navLinks.append(homeBtn, menuBtn, ourStoryBtn);

  const bookBtn = createElement(
    'button',
    'button button--primary header__book-btn',
    'Book Table'
  );

  navItems.append(navLinks, bookBtn);
  nav.append(logo, navItems);

  return nav;
}
