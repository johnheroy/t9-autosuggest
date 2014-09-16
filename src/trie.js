var Trie = function(value){
  this.value = value;
};

Trie.prototype.insertWord = function(word, rank){
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
    if (level.value === 'leaf'){
      level.value = 'leafy branch'; 
    }
    level = level[character];
  }
  level.value = (newBranch) ? 'leaf' : 'leafy branch';
  level.word = word;
  level.rank = rank;
};

Trie.prototype.getAllWords = function(){
  var results = [];

  if (this.value === 'leaf'){
    results.push(this.word);
  } else {
    if (this.value === 'leafy branch'){ results.push(this.word); }
    for (var k in this){
      // only the alphabetical keys have length of 1
      if (k.length === 1){
        var children = this[k].getAllWords();
        for (var i = 0; i < children.length; i++){ results.push(children[i]); }
      }
    }
  }  

  return results;
};

Trie.prototype.getAllWordsWithRank = function(){
  var results = [];

  if (this.value === 'leaf'){
    results.push([this.word, this.rank]);
  } else {
    if (this.value === 'leafy branch'){ results.push([this.word, this.rank]); }
    for (var k in this){
      // only the alphabetical keys have length of 1
      if (k.length === 1){
        var children = this[k].getAllWordsWithRank();
        for (var i = 0; i < children.length; i++){ results.push(children[i]); }
      }
    }
  }  

  return results;
};

