function getTitleTag() {
  const allElements = document.querySelectorAll("*");

  let maxFontSize = -1;
  let targetElement = Element.prototype;

  allElements.forEach((element) => {
    if (
      element.textContent &&
      element.textContent.length >= 10 &&
      window.getComputedStyle(element).fontSize
    ) {
      const fontSize = parseFloat(window.getComputedStyle(element).fontSize);

      if (fontSize > maxFontSize) {
        maxFontSize = fontSize;
        targetElement = element;
      }
    }
  });
  return targetElement;
}

function getTitle() {
  return getTitleTag().textContent || "";
}

export { getTitle, getTitleTag };
