describe('trie', function(){
  var trie;

  beforeEach(function(){
    trie = new Trie('*');
  });

  it('should have the methods "insertWord", "getAllWords", "getAllWordsWithRank", and "getAllWordsStartingWith"', function(){
    expect(trie.insertWord).to.be.a('function');
    expect(trie.getAllWords).to.be.a('function');
    expect(trie.getAllWordsWithRank).to.be.a('function');
    expect(trie.getAllWordsStartingWith).to.be.a('function');
  });

  it('should access inserted words by chained dot notation', function(){
    trie.insertWord('hello');
    trie.insertWord('hell');
    trie.insertWord('world');
    expect(trie.h.e.l.l.o.value).to.be.equal('leaf');
    expect(trie.h.e.l.l.value).to.be.equal('leafy branch');
    expect(trie.h.value).to.be.equal('branch');
    expect(trie.w.o.r.l.d.value).to.be.equal('leaf');
  });

  it('should return array of possible words when accessing trie.getAllWords()', function(){
    trie.insertWord('hello');
    trie.insertWord('hell');
    trie.insertWord('world');
    expect(trie.getAllWords()).to.be.eql(['hell', 'hello', 'world']);
    expect(trie.h.getAllWords()).to.be.eql(['hell', 'hello']);
  });

  it('should return array of tuples with word + rank when running trie.getAllWordsWithRank', function(){
    trie.insertWord('hello', 1);
    trie.insertWord('hell', 0);
    trie.insertWord('world', 2);
    // console.log(trie.getAllWordsWithRank());
    expect(trie.getAllWordsWithRank()).to.be.eql([['hell', 0], ['hello', 1], ['world', 2]]);
  });

  it('should return array with correct length when accessing trie.getAllWords()', function(){
    trie.insertWord('he');
    trie.insertWord('heman');
    trie.insertWord('heroy');
    trie.insertWord('herro');
    trie.insertWord('hell');
    trie.insertWord('hello');
    trie.insertWord('yoyoyo');
    trie.insertWord('hemp');
    trie.insertWord('helloo');
    trie.insertWord('hellooo');
    // console.log(trie);
    // console.log(trie.getAllWords());
    expect(trie.getAllWords().length).to.be.equal(10);
  });
})