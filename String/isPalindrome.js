var isPalindrome = function(s) {
    //根据正则删除除了字母外的字符
    var reg = new RegExp("[^a-zA-Z0-9]", "g")
    s = s.replace(reg, "")
    if (s != "") {
        for (let i = 0; i < s.length / 2; i++) {
            if (s.substr(i, 1).toUpperCase() != s.substr(s.length - 1 - i, 1).toUpperCase()) {
                return false
            }
        }
    }
    return true
};

isPalindrome("ab_cc")