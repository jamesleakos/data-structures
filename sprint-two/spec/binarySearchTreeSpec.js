describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(2);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.value).to.equal(3);
    expect(binarySearchTree.left.left.value).to.equal(2);
    expect(binarySearchTree.right.value).to.equal(7);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([3, 2, 5, 7]);
  });

  // kim test
  it('should do min and max correctly without rebalancing', function() {
    binarySearchTree.insert(4);
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    expect(binarySearchTree.max).to.eql(2);
    expect(binarySearchTree.min).to.eql(1);
  });

  it('should rebalance correctly', function() {
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.insert(10);
    binarySearchTree.insert(11);
    binarySearchTree.insert(12);
    expect(binarySearchTree.min).to.equal(2);
    expect(binarySearchTree.max).to.equal(3);
  });
});
