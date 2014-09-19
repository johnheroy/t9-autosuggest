(function(){
  var numbersToLetters = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  window.NumberToLetterConverter = function(){
    // one-dimensional array of input numbers
    this._input = [];
    // two-dimensional array of output letter possibilities
    this._outputs = [];
  };

  NumberToLetterConverter.prototype.addNewNumber = function(num){
    // TODO
  };

  NumberToLetterConverter.prototype.clear = function(){
    this._input = [];
    this._outputs = [];
  };

  NumberToLetterConverter.prototype.getLetterCombinations = function(){
    return this._outputs;
  };

}).call(this);

