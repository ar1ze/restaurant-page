export function createElement(tag, className = '', textContent = '') {
  const element = document.createElement(tag);

  if (className) element.className = className;
  if (textContent) element.textContent = textContent;

  return element;
}

export function getElement(selector) {
  return document.querySelector(selector);
}