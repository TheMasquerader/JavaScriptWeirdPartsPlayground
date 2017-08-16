// functional programming
// example: remapping arrays

function mapForEach(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        );
    }
    return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
    return item > 2;
});
console.log(arr2);

// -----

// But we want to be able to pass whatever limiter we want, not just 2. The issue is that mapForEach expects a fn with one param - the item.
var checkPastLimit = function(limiter, item) {
    return item > limiter;
};

// So we use bind() to create a copy of checkPastLimit and set a default value for the limitier param.
var arr3 = mapForEach(arr1, checkPastLimit.bind(this, 2));
console.log(arr3);

// Next step, we don't want to have to call bind(this...) every time.

// Variant 1 (mine)
function checkPastLimitBound(limiter) {
    return checkPastLimit.bind(this, limiter);
}

var arr4 = mapForEach(arr1, checkPastLimitBound(2));
console.log(arr4);

// Variant 2 (video)

var checkPastLimitSimplified = function(limiterb) {
  return function(limiter, item) {
      return item > limiter;
  }.bind(this, limiterb);  
};
var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr5);


// Underscore.js

var arr6 = _.map(arr1, function(item) {
    return item * 3;
});
console.log(arr6);