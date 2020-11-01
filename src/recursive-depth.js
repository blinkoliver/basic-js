 class DepthCalculator {
  calculateDepth(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result = Math.max(result, this.calculateDepth(arr[i]));
      }
    }
    return result + 1;
  }
};
module.exports = DepthCalculator