describe('trie', function(){
  var trie;

  beforeEach(function(){
    trie = new Trie('*');
  });

  it('should have the methods "insertWord" and "getAllWords"', function(){
    expect(trie.insertWord).to.be.a('function');
    expect(trie.getAllWords).to.be.a('function');
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
    console.log(trie);
    console.log(trie.getAllWords());
    expect(trie.getAllWords().length).to.be.equal(10);
  });
})