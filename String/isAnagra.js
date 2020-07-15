var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false
    }
    for (let i = 0; i < t.length; i++) {
        let val = t.substr(i, 1)
        if (s.indexOf(val) == -1) {
            return false
        } else {
            console.log(val)
            let reg = new RegExp(val)
            s = s.replace(reg, "")
        }
    }
    return true
};
isAnagram("aacc", "ccac")