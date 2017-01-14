var draftjs = require("draft-js")
var jsdom = require("jsdom")

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
})
global["HTMLElement"] = window.HTMLElement
global["HTMLAnchorElement"] = window.HTMLAnchorElement

var defaultContent = {
  "entityMap":{},
  "blocks":[
    {
      "key": draftjs.genKey(),
      "text": "",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": []
    }
  ]
}

var convertHTML = function(text) {
  if (!text || text.length < 1) {
    return defaultContent
  }

  return draftjs.convertToRaw(draftjs.ContentState.createFromBlockArray(draftjs.convertFromHTML(text)))
}

module.exports = {
  defaultContent: defaultContent,
  convertHTML: convertHTML
}
