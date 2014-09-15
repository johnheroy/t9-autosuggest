var Trie = function(value){
  this.value = value;
};

Trie.prototype.insertWord = function(word){
  var chars = word.split('');
  var level = this;
  var newBranch;
  for (var i = 0; i < chars.length; i++){
    var character = chars[i];
    if (level[character]){
      newBranch = false;
    } else {
      level[character] = new Trie('branch');
      newBranch = true;
    }
    level = level[character];
  }
  level.value = (newBranch) ? 'leaf' : 'leafy branch';
  level.word = word;
};

Trie.prototype.getAllWords = function(){
  var results = [];

  if (this.value === 'leaf'){
    results.push(this.word);
  } else {
    if (this.value === 'leafy branch'){ results.push(this.word); }
    for (var k in this){
      if (k.length === 1){
        var children = this[k].getAllWords();
        for (var i = 0; i < children.length; i++){
          results.push(children[i]);
        }
      }
    }
  }  

  return results;
};

