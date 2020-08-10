/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var number = -1;
    for (i = 1; i < nums.length - 1; i++) {
        let leftsum = 0;
        for (j = 0; j < i; j++) {
            leftsum = leftsum + nums[j];
        }
        let rightsum = 0;
        for (k = i + 1; k < nums.length; k++) {
            rightsum = rightsum + nums[k];
        }
        if (leftsum == rightsum) {
            number = i;
            return number;
        }
    }
    return number;
};



var obj = {};
obj.name = "xj";
obj.age = 12;



function Person(name, age) {
    this.name = name
    this.age = age
}
var obj = new Person("hhh", 12);