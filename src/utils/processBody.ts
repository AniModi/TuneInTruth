const stopword = require("stopword");

function processArticleText(textContent: string) {
  return textContent.replace(/\s+/g, " ").replace(/\n+/g, " ");
}

function classifyBlock(
  block: any,
  MAX_LINK_DENSITY = 0.2,
  LENGTH_LOW = 70,
  LENGTH_HIGH = 200,
  STOPWORDS_LOW = 0.3,
  STOPWORDS_HIGH = 0.32
) {
  const length = block.length;

  const linkDensity =
    (block.match(/<a.*?<\/a>/gs) || []).join("").length / length;

  const words = block.split(/\s+/);
  const stopwordsDensity =
    stopword.removeStopwords(words).length / words.length;

  if (linkDensity > MAX_LINK_DENSITY) {
    return -1;
  }

  if (length < LENGTH_LOW) {
    return -1;
  }

  if (stopwordsDensity > STOPWORDS_HIGH) {
    if (length > LENGTH_HIGH) {
      return 1;
    } else {
      return 0.5;
    }
  }

  if (stopwordsDensity > STOPWORDS_LOW) {
    return 0.5;
  } else {
    return -1;
  }
}

function preprocessElement(element: any) {
  const excludedTags = ["noscript", "script", "header", "footer", "style"];
  const clone = element.cloneNode(true);

  excludedTags.forEach((tag) => {
    const elementsToRemove = clone.querySelectorAll(tag);
    elementsToRemove.forEach((element: any) =>
      element.parentNode.removeChild(element)
    );
  });

  return clone;
}

// function findLargestFontSize(element) {
//     const childElements = element.getElementsByTagName('*');

//     let largestFontSize = 0;

//     for (let i = 0; i < childElements.length; i++) {
//       const currentElement = childElements[i];

//       const computedStyle = window.getComputedStyle(currentElement);

//       const fontSize = parseFloat(computedStyle.fontSize);

//       if (fontSize > largestFontSize) {
//         largestFontSize = fontSize;
//       }
//     }

//     return largestFontSize;
//   }

function extractBody() {
  const segmentationTags = [
    "blockquote",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "div",
    "dl",
    "dt",
    "fieldset",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "legend",
    "li",
    "optgroup",
    "option",
    "p",
    "pre",
    "table",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "tr",
    "ul",
  ];

  const texts : string[] = [];

  segmentationTags.forEach((tag) => {
    const elements = document.getElementsByTagName(tag);

    for (let i = 0; i < elements.length; i++) {
      const originalElement = elements[i];
      const element = preprocessElement(originalElement);

      const elementContent = element.outerHTML.trim();
      const classification = classifyBlock(elementContent);

      if (classification >= 0) {
        const textContent = processArticleText(element.textContent.trim());
        if (textContent.split(" ").length < 30) {
          continue;
        }
        texts.push(textContent);
      }
    }
  });

  for (let i = 0; i < texts.length; i++) {
    for (let j = 0; j < texts.length; j++) {
      if (i === j) {
        continue;
      }
      if(texts[i].includes(texts[j])) {
        texts.splice(j, 1);
      }
    }
  }

  let content = "";

  for(let i = 0; i < texts.length; i ++) {
    content += texts[i];
  }

  if (content.length > 4500) {
    console.log(content.slice(0, 4500));
    return content.slice(0, 4500);
  }

  return content;
}

export { extractBody };
