var firstUniqChar = function(s) {
    var result = -1;
    for (let i = 0; i < s.length - 1; i++) {
        let newstr = s.slice(i + 1, s.length)
        let ss = s;
        let currVal = s.substr(i, 1)
        let index = newstr.indexOf(currVal)
        if (index == -1) {
            result = i
            return result
        }
    }
    return result;

};
firstUniqChar("aadadaad")