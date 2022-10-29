var BinarySearchTree = function(value) {
  var newBinarySearchTree = Object.create(BinarySearchTree.prototype);
  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;
  newBinarySearchTree.min = 0;
  newBinarySearchTree.max = 0;

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

  this.setMinMax();
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

BinarySearchTree.prototype.rebalance = function () {
  // first we make the array using depth first log
  var array = [];
  this.depthFirstLog(function () {
    array.push(this.value);
  });
  // sort the array
  array.sort(function(a, b) {
    return a - b;
  });

  // call createTree(arr)
  this.createTree(array);
};

BinarySearchTree.prototype.createTree = function (arr) {
  var middleIndex = Math.floor((arr.length - 1) / 2);
  // get middle value
  var middleValue = arr[middleIndex];
  // get value to middle value
  this.value = middleValue;
  // create leftArr
  var leftArr = arr.slice(0, middleIndex);
  // create rightArry
  var rightArr = arr.slice(middleIndex + 1);

  // if leftArr
  if (leftArr.length > 0) {
    //create leftTree
    var leftTree = BinarySearchTree(null);
    // call leftTree.createTree(leftArr)
    leftTree.createTree(leftArr);
  }
  // if rightArr
  if (rightArr.length > 0) {
    // create rightTree
    var rightTree = BinarySearchTree(null);
    // call rightTree.createTree(rightArr)
    rightTree.createTree(rightArr);
  }

  this.setMinMax();
};

BinarySearchTree.prototype.setMinMax = function () {
  // find min
  if (this.left === null || this.right === null) {
    this.min = 0;
  } else {
    this.min = Math.min(this.left.min, this.right.min) + 1;
  }

  // find max
  if (this.left === null && this.right === null) {
    this.max = 0;
  } else {
    var leftMax = this.left !== null ? this.left.max : 0;
    var rightMax = this.right !== null ? this.right.max : 0;
    this.max = Math.max(leftMax, rightMax) + 1;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
