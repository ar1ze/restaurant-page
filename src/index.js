import './scss/main.scss';

import { PAGE_HOME, PAGE_MENU, PAGE_STORY } from './constants/pages';

import { applyBackgroundOverlay } from './components/backgroundOverlay';
import { createNav } from './components/navBar';
import { createMenuButton } from './components/menuButton';

import { createHomePage } from './pages/homePage';
import { createAtmospherePage } from './pages/atmospherePage';
import { createStoryPage } from './pages/storyPage';

import * as dom from './utils/dom';

class App {
  constructor() {
    this.currentPage = PAGE_HOME;
    this.header = dom.getElement('.header');
    this.main = dom.getElement('.main');
    this.init();
  }

  init() {
    this.renderPage(this.currentPage);
  }

  renderPage(page) {
    const body = document.body;

    this.currentPage = page;
    applyBackgroundOverlay(this.currentPage);

    this.header.replaceChildren();
    const nav = createNav(this.currentPage);
    this.header.append(nav);

    this.main.replaceChildren();

    const existingMenuBtn = dom.getElement('.menu');
    if (existingMenuBtn) {
      existingMenuBtn.remove();
    }

    switch (page) {
      case PAGE_HOME:
        const home = createHomePage();
        this.main.append(home);
        const menuBtn = createMenuButton();
        body.append(menuBtn);
        break;
      case PAGE_MENU:
        const atmosphere = createAtmospherePage();
        this.main.append(atmosphere);
        break;
      case PAGE_STORY:
        const story = createStoryPage();
        this.main.append(story);
        break;
    }

    this.attachNavListeners();
  }

  handlePageChange(page) {
    if (this.currentPage !== page) this.renderPage(page);
  }

  attachNavListeners() {
    const pages = [PAGE_HOME, PAGE_MENU, PAGE_STORY];
    const logo = dom.getElement('.header__logo');
    const menu = dom.getElement('.menu');

    logo.addEventListener('click', () => this.handlePageChange(PAGE_HOME));
    if (menu)
      menu.addEventListener('click', () => this.handlePageChange(PAGE_MENU));

    pages.forEach((page) => {
      const btn = dom.getElement(`#${page}-btn`);
      if (btn) btn.addEventListener('click', () => this.handlePageChange(page));
    });
  }
}

new App();
