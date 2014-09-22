$(document).ready(function(){
  var trie = new Trie('*');
  var converter = new NumberToLetterConverter();
  var dictionary;

  var whichKeyClass = function(num){
    return '.number-' + (num - 48);
  };

  var whichKey = function(num){
    return num - 48;
  };

  var updateInputBox = function(){
    var permutations = converter.getLetterPermutations();
    var words = [];
    for (var i = 0; i < permutations.length; i++){
      words.concat(trie.getAllWordsStartingWith(permutations[i]));
    }
    console.log(words);
  };

  // keyboard events
  $(document).keydown(function(event){
    $(whichKeyClass(event.which)).addClass('active');
    converter.addNewNumber(whichKey(event.which));
    updateInputBox();
  });

  $(document).keyup(function(event){
    $(whichKeyClass(event.which)).removeClass('active');
  });

  var dictionaryHasLoaded = function(){
    $('.input-box').text('Start typing or clicking numbers to begin');
    // fixme
    $('.input-box').css('box-shadow', '0px 0px 20px 0px rgba(221,222,235,1)');
  };

  $.get('words/google-10000-english.txt', function(data){
    dictionary = data.split('\n');
    for (var i = 0; i < dictionary.length; i++){
      trie.insertWord(dictionary[i], i);
    }
    dictionaryHasLoaded();
  });

});