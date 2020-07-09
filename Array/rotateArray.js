var numss = [1, 2, 3, 4, 5, 6, 7]
var k = 3
var rotate = function(numss, k) {
    //1.截取数组，循环数组，添加到原数组头
    //VAR NEWNUMS=NUMS.SPLICE(NUMS.LENGTH-K,K).REVERSE()
    //FOR(LET I=0;I<NEWNUMS.LENGTH;I++){
    //    NUMS.UNSHIFT(NEWNUMS[I])
    //}

    //2.同一个数组unshit
    var numlength = numss.length
    for (let i = 0; i < k; i++) {
        numss.unshift(numss[numlength - 1])
        numss.pop()
    }

    var nums1 = [1, 2, 2, 1]
    var nums2 = [2, 2]
    var newArray = []
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                newArray.push(nums1[i])
                break
            }
        }
    }
    return newArray


};
rotate(numss, k)