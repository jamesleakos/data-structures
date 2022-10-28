var BinarySearchTree = function(value) {
  var newBinarySearchTree = Object.create(BinarySearchTree.prototype);
  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;

  return newBinarySearchTree;
};

BinarySearchTree.prototype = {};

BinarySearchTree.prototype.insert = function(value) {
  // check if inpuuted value is greater than or less than current value
  if (value === this.value) {
    return;
  }
  if (value < this.value) {
  // if less, check if we have left property
    if (this.left === null) {
    // if not, create new tree as left prop
      this.left = BinarySearchTree(value);
    } else {
      // else, call left tree and insert value
      this.left.insert(value);
    }
  } else {
  // if more (same)
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  // check if value is eual to this.value
  if (this.value === value) {
    return true;
  }

  // check if value is greater or less
  if (value < this.value) {
    if (this.left !== null) {
      return this.left.contains(value);
    } else {
      return false;
    }
  } else {
    if (this.right !== null) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  // run callback on value
  callback(this.value);
  // check if left exists
  if (this.left !== null) {
    // if yes, run callback on left tree
    this.left.depthFirstLog(callback);
  }
  // if right exists
  if (this.right !== null) {
    // run callback on right tree
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
