/**
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
示例 1:
输入: "hello"
输出: "holle"
示例 2:
输入: "leetcode"
输出: "leotcede"
说明:
元音字母A、E、I、O、U.不包含字母"y"。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-vowels-of-a-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
//var alpha = ["A", "E", "I", "O", "U"]
const alpha = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])
var reverseVowels = function(s) {
    var returnStr = "";
    var sArray = s.split("")
    var revesArray = s.split("").reverse()
    var indexj = 0
    for (i = 0; i < sArray.length; i++) {
        // if (alpha.includes(sArray[i])) {
        if (alpha.has(sArray[i])) {
            for (j = indexj; j < revesArray.length; j++) {
                if (alpha.has(revesArray[j])) {
                    indexj = j + 1
                    returnStr = returnStr + revesArray[j]
                    break;
                }
            }
        } else {
            returnStr = returnStr + sArray[i]
        }
    }
    console.log(returnStr)
};