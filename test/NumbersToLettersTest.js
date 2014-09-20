describe('numbers to letters', function(){
  var converter;

  beforeEach(function(){
    converter = new NumberToLetterConverter();
  });

  it('should give the letter permutations for a single number', function(){
    converter.addNewNumber(3);
    expect(converter.getLetterPermutations()).to.be.eql(['d', 'e', 'f']);
  });

  it('should give letter permutations for two number inputs', function(){
    converter.addNewNumber(3);
    converter.addNewNumber(4);
    expect(converter.getLetterPermutations()).to.be.eql(['dg', 'dh', 'di', 'eg', 'eh', 'ei', 'fg', 'fh', 'fi']);
  });

});