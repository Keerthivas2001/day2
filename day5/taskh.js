//h.Rotate an array by k times

// anonymous function

const a = function(nums, k) {

  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

  return nums;
}
console.log(a([1,2,3,4,5],2));

//   IFFE function

 (function(nums, k) {

  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

  console.log(nums);
})
([1,2,3,4,5],2);