/**
 * 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。

现有一个链表 -- head = [4,5,1,9]，它可以表示为:



 

示例 1:

输入: head = [4,5,1,9], node = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
示例 2:

输入: head = [4,5,1,9], node = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
 

说明:

链表至少包含两个节点。
链表中所有节点的值都是唯一的。
给定的节点为非末尾节点并且一定是链表中的一个有效节点。
不要从你的函数中返回任何结果。
 */
// function listNode() {
//     this.val = 1;
//     this.next = null;
// }
// var node = new listNode();
// var deleteNode = function(node) {
//     node.val = node.next.val;
//     node.next = node.next.next
// };
// deleteNode();



var array = [1, 2]

function transferPoints(value) {
    value.push(3)
}
transferPoints(array)
console.log(array)


function construct() {

}
var obj = new construct()
var array = [1, 2]

function func() {

}

console.log(typeof(obj), typeof(array), typeof(func))
console.log(obj instanceof construct) //tue  构造函数construct的prototype属性在对象obj的原型链上


var obja = { name: 'xj' }
var objb = { name: 'xj' }
console.log(obja == objb);

var objc = { name: 'xj' };
objc.age = 12;
console.log(objc)
Object.defineProperty(objc, "age", {
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(objc, "age"));



//构造函数模式
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = sayName;
}

function sayName() {
    alert(this.name)
}
var person1 = new Person('xj', 12);
var person2 = new Person('xj', 13);


//原型模式
function Person() {

}
Person.prototype.name = 'xj';
Person.prototype.age = '12';
Person.prototype.sayName = function() {
    alert(this.name);
}
var person1 = new Person();
var person2 = new Person();
console.log(person1.sayName == person2.sayName)