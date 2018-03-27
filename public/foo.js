import AdaptiveHtml from 'adaptive-html';

var json = AdaptiveHtml.toJSON('<p>Turn me into an Adaptive Card</p>');
console.log(JSON.stringify(json, null, '\t'));

var cardElem = AdaptiveHtml.toHTML(json);
console.log(cardElem.outerHTML);