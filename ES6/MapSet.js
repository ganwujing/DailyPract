var mapObj = new Map();
mapObj.set("age", "12")
mapObj.set("name", "xj")
var setObj = new Set();
setObj.add(1)
setObj.add("hhhh")

forOfMap();
forEachMap();
mapConvertArray()
setValue()
setConvertArray()
stringConvertArray()

function forOfMap() {
    for (var [key, value] of mapObj) {
        console.log(key + "=" + value)
    }

    for (var [key, value] of mapObj.entries()) {
        console.log(key + "=" + value)
    }

    for (var key of mapObj.keys()) {
        console.log(key)
    }

    for (var value of mapObj.values()) {
        console.log(value)
    }

}

function forEachMap() {
    mapObj.forEach(function(value, key) {
        console.log(key + "=" + value)
    })
}

function mapConvertArray() {
    var mapToArray = Array.from(mapObj);
    console.log(mapToArray)

    var arrayToMap = [
        [0, "xj"],
        [1, "12"]
    ]
    console.log(new Map(arrayToMap))
}

function setValue() {
    setObj.add({ name: "xj", age: 12 })
    console.log(setObj)
}

function setConvertArray() {
    var setArray = Array.from(setObj)
    console.log(setArray)

    var array = [
        0, "123"
    ]
    var set = new Set(array)
    console.log(set)
}

function stringConvertArray() {
    var stringSet = new Set("hello")
    console.log(stringSet)
}