const nums = [1, 1, 2]
var removeDuplicates = function(nums) {
    var setNums = new Set(nums)
    console.log(setNums)
    nums = Array.from(setNums)
    console.log(nums)
    return nums
};
removeDuplicates(nums)