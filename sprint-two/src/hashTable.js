

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    this._storage.set(index, [[k, v]]);
    return;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      return;
    }
  }
  bucket.push([k, v]);
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
  this._storage.each(function(element, i, storage) {
    if (i === index) {
      storage.splice(i, 1);
    }
  });
};

// HashTable.prototype.expand = function() {
//   this._limit *= 2;
//   var newTable = LimitedArray(this._limit);

//   this._storage.each(function(element, key, storage) {
//     var newIndex = getIndexBelowMaxForKey(key, this._limit);
//     newTable.set(newIndex, element);
//   });

//   this._storage = newTable;
// };


/*
 * Complexity: What is the time complexity of the above functions?
 */


