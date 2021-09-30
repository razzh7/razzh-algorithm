function createIterator(items) {
  var i = 0;

  return {
    next() {
      var done = (i >= items.length);
      var value = !done ? items[i++] : undefined;
      return {
        done,
        value
      }
    }
  }
}


var iteraterator = createIterator([1,2,3]);
console.log(iteraterator.next())
console.log(iteraterator.next())
console.log(iteraterator.next())
console.log(iteraterator.next())
console.log(iteraterator.next())
