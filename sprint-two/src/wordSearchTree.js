var WordSearchTree = function (value, letterChain) {
  this.value = value;
  this.endsWord = false;
  this.letterChain = letterChain;
  this.children = [];
};

WordSearchTree.prototype.addArr = function (arr) {
  if (arr.length === 0) {
    return;
  }

  var firstChar = arr[0];
  var remainingWord = arr.slice(1);

  // check if we have a child with the next letter already
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    if (child.value === firstChar) {
      child.addArr(remainingWord);
      return;
    }
  }

  // if we don't, create a new child
  var newChild = new WordSearchTree(firstChar, this.letterChain + firstChar);
  if (arr.length === 1) {
    newChild.endsWord = true;
  } else {
    newChild.addArr(remainingWord);
  }
  this.children.push(newChild);
};

WordSearchTree.prototype.addWordToDict = function (str) {
  var arr = str.split('');
  this.addArr(arr);
};

WordSearchTree.prototype.findWordFromLetters = function (letters) {
  var words = [];

  for (var l = 0; l < letters.length; l++) {
    var letter = letters[l];
    for (var c = 0; c < this.children.length; c++) {
      var child = this.children[c];
      if (child.value === letter) {
        if (child.endsWord) {
          words.push(child.letterChain);
        }
        var newLetters = letters.slice(1);
        if (newLetters > 0) {
          child.findWordFromLetters(newLetters);
        }
      }
    }
  }

  return words;
};

WordSearchTree.prototype.getAllWords = function () {
  var words = [];
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    if (child.endsWord) {
      words.push(child.letterChain);
    }
    words.concat(child.getAllWords);
  }
  return words;
};