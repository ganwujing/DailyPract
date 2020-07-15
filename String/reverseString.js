var reverseString = function(s) {
    var index = s.length - 1
    for (let i = index; i > 0; i--) {
        s.push(s[i - 1])
        s.splice(i - 1, 1)
    }
    return s

};
reverseString(["h", "e", "l", "l", "o"])