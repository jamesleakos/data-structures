

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  if (this.retrieve(k) !== undefined) {
    this._limit *= 2;
    var newTable = LimitedArray(this._limit);

    this._storage.each(function(element, key, storage) {
      var newIndex = getIndexBelowMaxForKey(key, this._limit);
      newTable.set(newIndex, element);
    });

    this._storage = newTable;
  }
  index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(element, i, storage) {
    if (i === index) {
      storage.splice(i, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


