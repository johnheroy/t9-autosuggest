$(document).ready(function(){
  var trie = new Trie('*');
  var dictionary;

  var whichKeyClass = function(num){
    return '.number-' + (num - 48);
  };

  $(document).keydown(function(event){
    $(whichKeyClass(event.which)).addClass('active');
  });

  $(document).keyup(function(event){
    $(whichKeyClass(event.which)).removeClass('active');
  });

  var dictionaryHasLoaded = function(){
    // Change 'loading' text to 'please input'
    // bring input box into focus
    $('.input-box').text('Start typing or clicking numbers to begin');
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