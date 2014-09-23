$(document).ready(function(){
  var trie = new Trie('*');
  var converter;
  var dictionary;

  var whichKeyClass = function(num){
    return '.number-' + (num - 48);
  };

  var whichKey = function(num){
    return num - 48;
  };

  var updateInputBox = function(){
    var permutations = converter.getLetterPermutations();

    if (permutations.length === 0){
      $('.input-box').text('try again!');
      $('.input-box').css('text-decoration', 'none');
      return;
    }

    var words = [];
    for (var i = 0; i < permutations.length; i++){
      var possibilities = trie.getAllWordsWithRankStartingWith(permutations[i]);
      var totalRank = _.reduce(possibilities, function(memo, item){
        return memo + item[1];
      }, 0);
      permutations[i] = [permutations[i], totalRank];
      words = words.concat(possibilities);
    }

    // get the highest ranked fragment and show user this one
    var bestFragmentIndex = 0;
    for (var j = 1; j < permutations.length; j++){
      if (permutations[j][1] > permutations[bestFragmentIndex][1]){
        bestFragmentIndex = j;
      }
    }
    var bestFragment = permutations[bestFragmentIndex][0];
    $('.input-box').text(bestFragment);
    $('.input-box').css('text-decoration', 'underline');

  };

  $(document).keydown(function(event){
    var key = whichKey(event.which);
    $(whichKeyClass(event.which)).addClass('active');
    if (converter !== undefined && key >= 0 && key <= 9){
      console.log('Adding new number to converter');
      converter.addNewNumber(whichKey(event.which));
      updateInputBox();
    } else if (converter !== undefined && event.which === 8){
      event.preventDefault();
      console.log('Removing letter');
      converter.removeNumber();
      updateInputBox();
    }
  });

  $(document).keyup(function(event){
    $(whichKeyClass(event.which)).removeClass('active');
  });

  var dictionaryHasLoaded = function(){
    $('.input-box').text('Start typing or clicking numbers to begin');
    $('.input-box').css('box-shadow', '0px 0px 20px 0px rgba(221,222,235,1)');
    converter = new NumberToLetterConverter();
  };

  $.get('words/google-10000-english.txt', function(data){
    dictionary = data.split('\n');
    for (var i = 0; i < dictionary.length; i++){
      trie.insertWord(dictionary[i], 10000 - i);
    }
    dictionaryHasLoaded();
  });

});