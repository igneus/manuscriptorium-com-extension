'use strict';

const findElementByTitle = function (title, element) {
  return document
    .evaluate("//"+element+"[@title = '"+title+"']", document, null, XPathResult.ANY_TYPE, null)
    .iterateNext();
};

const findLinkByTitle = function (title) {
  return findElementByTitle(title, 'a');
};

// TODO: this probably works only with locale EN.
const previous = function () {
    findLinkByTitle('Browse to previous page/image.').click();
};

const next = function () {
    findLinkByTitle('Browse to next page/image.').click();
};

const close = function () {
    findLinkByTitle('Close floating window.').click();
};

const maximize = function () {
    findLinkByTitle('Maximize floating window.').click();
};

document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (keyName === 'ArrowLeft') {
    previous();
  } else if (keyName === 'ArrowRight') {
    next();
  } else if (keyName === 'Escape') {
    close();
  } else if (keyName === 'f' || keyName === 'ArrowUp') {
    maximize();
  } else if (keyName === '+') {
    findElementByTitle('Zoom in', 'button').click();
  } else if (keyName === '-') {
    findElementByTitle('Zoom out', 'button').click();
  }
  // else { console.log(keyName); }
}, false);
