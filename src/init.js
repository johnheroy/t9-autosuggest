$(document).ready(function(){
  var trie = new Trie('*');
  var dictionary;

  $.get('words/google-10000-english.txt', function(data){
    dictionary = data.split('\n');
    for (var i = 0; i < dictionary.length; i++){
      trie.insertWord(dictionary[i], i);
    }
    
  });

  var whichKeyClass = function(num){
    return '.number-' + (num - 48);
  };

  $(document).keydown(function(event){
    $(whichKeyClass(event.which)).addClass('active');
  });

  $(document).keyup(function(event){
    $(whichKeyClass(event.which)).removeClass('active');
  });

})