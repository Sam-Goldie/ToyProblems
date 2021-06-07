MedianFinder.prototype.sort = function() {
  this.values.sort(function(a, b) {
    return a - b;
  });
}

MedianFinder.prototype.addNum = function(num) {
  this.values.push(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  this.sort();
  if (this.values.length % 2 !== 0) {
    return this.values[Math.floor(this.values.length / 2)];
  } else {
    return ((this.values[this.values.length / 2] + this.values[(this.values.length / 2) - 1]) / 2);
  }
};