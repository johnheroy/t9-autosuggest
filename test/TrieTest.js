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
})