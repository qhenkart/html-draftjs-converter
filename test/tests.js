var conv = require('../htmlConverter.js')
var expect = require('chai').expect;


describe('htmlConverter', function() {
  describe('converting HTML', function(){
    it('returns the default content for empty text', function() {
      expect(conv.convertHTML("")).to.deep.equal(conv.defaultContent)
    })

    it('returns correct draftJS results for a simple html statement', function(){
      const sampleHTML = "<p>Add interview notes here</p>"
      var result = conv.convertHTML(sampleHTML)
      const key = result.blocks[0].key
      var expected = {"entityMap" : {},"blocks" : [{"depth" : 0, "inlineStyleRanges" : [ ],"entityRanges" : [ ],"key" : key,"text" : "Add interview notes here","type" : "unstyled"}]}
      expect(result).to.deep.equal(expected)
    })
  })
})
