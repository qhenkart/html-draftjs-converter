#HTML -> DraftJS converter
A standalone module that runs entirely in node. Perfect for migrating database content into draftJS ready file structures, or parsing JSON files.

Written in es5 and is compatible on any system


###USAGE
var convert = require('htmlConverter')

var convertedText = convert.convertHTML(text)

or get the default content

var defaultContent = convert.defaultContent
