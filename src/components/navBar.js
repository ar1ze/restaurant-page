import * as dom from '../utils/dom';
import { PAGE_HOME, PAGE_MENU, PAGE_STORY } from '../constants/pages';

export function createNav(activePage = PAGE_HOME) {
  const nav = dom.createElement('nav', 'header__nav');

  const logo = dom.createElement('button', 'header__logo', 'The Saigon Social');

  const navItems = dom.createElement('div', 'header__nav-items');
  const navLinks = dom.createElement('div', 'header__nav-links');

  const createNavButton = (id, label) => {
    const isActive = activePage === id;
    const className = `nav-link${isActive ? ' nav-link--active' : ''}`;
    const button = dom.createElement('button', className, label);
    button.id = `${id}-btn`;
    return button;
  };

  const homeBtn = createNavButton(PAGE_HOME, 'Home');
  const menuBtn = createNavButton(PAGE_MENU, 'Menu');
  const ourStoryBtn = createNavButton(PAGE_STORY, 'Our Story');

  navLinks.append(homeBtn, menuBtn, ourStoryBtn);

  const bookBtn = dom.createElement(
    'button',
    'button button--primary header__book-btn',
    'Book Table'
  );

  navItems.append(navLinks, bookBtn);
  nav.append(logo, navItems);

  return nav;
}
