

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    this._storage.set(index, [[k, v]]);
    this.increaseSize();
    return;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      return;
    }
  }
  bucket.push([k, v]);
  this.increaseSize();
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    return;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var ht = this;
  this._storage.each(function(element, i, storage) {
    if (element !== undefined) {
      for (var j = element.length - 1; j >= 0; j--) {
        if (element[j][0] === k) {
          element.splice(j, 1);
          ht.decreaseSize();
        }
      }
    }
  });
};

HashTable.prototype.expand = function() {
  this._limit *= 2;
  this.resetTable();
};

HashTable.prototype.shrink = function() {
  this._limit = Math.floor(this._limit / 2);
  this.resetTable();
};

HashTable.prototype.resetTable = function() {
  var oldTable = this._storage;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  var ht = this;

  oldTable.each(function(element, key, storage) {
    if (element !== undefined) {
      for (var i = 0; i < element.length; i++) {
        ht.insert(element[i][0], element[i][1]);
      }
    }
  });
};

HashTable.prototype.increaseSize = function() {
  this._size++;
  if (this._size / this._limit > 0.75) {
    this.expand();
  }
};

HashTable.prototype.decreaseSize = function() {
  this._size--;
  if (this._size / this._limit < 0.25) {
    this.shrink();
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


