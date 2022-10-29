describe('wordSearchTree', function() {
  var wst;

  beforeEach(function() {
    wst = new WordSearchTree(null, '');
    wst.addWordToDict('dog');
  });

  it('', function() {
    // debugger;
    console.log(wst.getAllWords());
    expect(1).to.equal(1);
  });


});