var myAtoi = function(str) {
    var max = Math.pow(2, 31) - 1
    var min = -Math.pow(2, 31)
        //去除空白字符开头
    str = str.replace(/^\s+/g, '')
        //判断第一个字符是否为数字或正负号
    var reg = new RegExp("[0-9+-]", "g")
    var firstchar = str.substr(0, 1)
    if (!reg.test(firstchar)) {
        return 0;
    } else {
        if ((firstchar === "-" || firstchar === "+") && str.length == 1) {
            return 0
        }
        if (firstchar == "-" || firstchar == "+") {
            str = str.substr(1, str.length - 1)
        }
        var reg2 = new RegExp("[^0-9]", "g")
        var numstr = reg2.exec(str);
        if (numstr == null) {
            index = str.length
            str = str.substr(0, index)
        } else {
            str = str.substr(0, numstr.index)
        }

        if (firstchar == "-") {
            str = "-" + str
            return parseInt(str) < min ? min : parseInt(str)
        } else {
            return parseInt(str) > max ? max : parseInt(str)
        }
    }


};
myAtoi("+")