var dictionary = [
  'dog', 'dogs', 'cat', 'cash', 'cashes', 'cats', 'cot', 'cop', 'dab'
];

describe('wordSearchTree', function() {
  var wst;

  beforeEach(function() {
    wst = new WordSearchTree(null, '');
    dictionary.forEach(function (value) {
      wst.addWordToDict(value);
    });
  });

  it('should find all words matching letters', function() {
    var words = wst.getAllWords();
    console.log(words);
    var res = wst.findWordFromLetters(['s', 'o', 'd', 'g', 'a', 'b']);
    console.log(res);
    expect(res).to.eql(['dog', 'dogs', 'dab']);
  });

  it('should not duplicate words with duplicate letters', function() {
    var res = wst.findWordFromLetters(['s', 's', 'a', 'e', 'c', 'h']);
    expect(res).to.eql(['cash', 'cashes']);
  });

});