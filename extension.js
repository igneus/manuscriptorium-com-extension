'use strict';

const findElementByTitle = function (title, element) {
  const conditions =
    title
      .map(function (t) { return "@title = '"+t+"'" })
      .join(' or ')

  return document
    .evaluate("//"+element+"["+conditions+"]", document, null, XPathResult.ANY_TYPE, null)
    .iterateNext();
};

const findLinkByTitle = function (title) {
  return findElementByTitle(title, 'a');
};

// TODO: this probably works only with locale EN.
const previous = function () {
    findLinkByTitle(['Browse to previous page/image.', 'Listování na předchozí stránku/obrázek.']).click();
};

const next = function () {
    findLinkByTitle(['Browse to next page/image.', 'Listování na další stránku/obrázek.']).click();
};

const close = function () {
    findLinkByTitle(['Close floating window.', 'Zavře plovoucí okno.']).click();
};

const maximize = function () {
    findLinkByTitle(['Maximize floating window.', 'Maximalizuje plovoucí okno.']).click();
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
    findElementByTitle(['Zoom in'], 'button').click();
  } else if (keyName === '-') {
    findElementByTitle(['Zoom out'], 'button').click();
  }
  // else { console.log(keyName); }
}, false);
