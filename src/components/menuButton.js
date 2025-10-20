import * as dom from '../utils/dom';

export function createMenuButton() {
  const menuButton = dom.createElement('button', 'menu');
  const bowlContainer = dom.createElement('span', 'menu__bowl-container');

  const steamContainer = dom.createElement('span', 'menu__steam');
  const steamLines = [...Array(3)].map(() =>
    dom.createElement('span', 'menu__steam-line')
  );
  steamContainer.append(...steamLines);

  const bowl = dom.createElement('span', 'menu__bowl');

  const textContainer = dom.createElement('span', 'menu__text');
  const menuText = dom.createElement('span', 'menu__headtext', 'view menu');
  const descriptionText = dom.createElement(
    'span',
    'menu__subtext',
    'Discover our flavors'
  );
  textContainer.append(menuText, descriptionText);

  bowlContainer.append(steamContainer, bowl);
  menuButton.append(bowlContainer, textContainer);

  return menuButton;
}
