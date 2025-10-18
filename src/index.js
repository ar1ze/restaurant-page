import './scss/main.scss';

import { PAGE_HOME, PAGE_MENU, PAGE_STORY } from './constants/pages';

import { applyBackgroundOverlay } from './components/backgroundOverlay';
import { createNav } from './components/navBar';

import { createHomePage } from './pages/homePage';
import { createAtmospherePage } from './pages/atmospherePage';
import { createStoryPage } from './pages/storyPage';

import * as dom from './utils/dom';

class App {
  constructor() {
    this.currentPage = PAGE_STORY;
    this.header = dom.getElement('.header');
    this.main = dom.getElement('.main');
    this.init();
  }

  init() {
    this.renderPage(this.currentPage);
  }

  renderPage(page) {
    this.currentPage = page;
    applyBackgroundOverlay(this.currentPage);

    this.header.replaceChildren();
    const nav = createNav(this.currentPage);
    this.header.append(nav);

    this.main.replaceChildren();

    switch (page) {
      case PAGE_HOME:
        const home = createHomePage();
        this.main.append(home);
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

  attachNavListeners() {
    const pages = [PAGE_HOME, PAGE_MENU, PAGE_STORY];

    pages.forEach((page) => {
      const btn = dom.getElement(`#${page}-btn`);
      if (btn) btn.addEventListener('click', () => this.renderPage(page));
    });
  }
}

new App();
