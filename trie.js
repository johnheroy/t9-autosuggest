// pseudoclassical instantiation
// a trie should have branches and leaves (terminal)
// also methods like .

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
};

Trie.prototype.getAllWords = function(){

};

