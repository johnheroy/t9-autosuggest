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

  NumberToLetterConverter.prototype.generateNewOutputs = function(num){
    var newOutput = [];
    var newLetters = numbersToLetters[num];

    if (this._outputs.length === 0){
      this._outputs = newLetters.slice();
      return;
    }

    for (var i = 0; i < this._outputs.length; i++){
      for (var j = 0; j < newLetters.length; j++){
        newOutput.push(this._outputs[i].concat(newLetters[j]));
      }
    }
    this._outputs = newOutput;
  };

  NumberToLetterConverter.prototype.addNewNumber = function(num){
    this._input.push(num);
    this.generateNewOutputs(num);
  };

  NumberToLetterConverter.prototype.removeNumber = function(){
    if (this._input.length > 0){
      this._input.pop();
      this._outputs = [];
      for (var i = 0; i < this._input.length; i++){
        this.generateNewOutputs(this._input[i]);
      }
    }
  };

  NumberToLetterConverter.prototype.clear = function(){
    this._input = [];
    this._outputs = [];
  };

  NumberToLetterConverter.prototype.getLetterPermutations = function(){
    return this._outputs.slice();
  };

}).call(this);

