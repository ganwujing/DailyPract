/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
 */
var moveZeroes = function(nums) {
    var count = 0;
    for (i = 0; i < nums.length; i++) {
        var index = nums.indexOf(0);
        if (index != -1) {
            nums.splice(index, 1)
            count = count + 1
        } else {
            break;
        }
    }
    for (i = 0; i < count; i++) {
        nums.push(0)
    }
    return nums;
};