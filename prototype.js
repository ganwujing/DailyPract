function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log("hello");
    }
}
Person.prototype.sayHi = function() {
    console.log("hi")
}
var person1 = new Person('xj', '12');
person1.sayHello();
person1.sayHi();
var person2 = new Person('jwj', '13');
person2.sayHello();
person2.sayHi();

console.log(person2 instanceof Person)
console.log(person1 instanceof Array)

//原型模式
//每个函数都有prototype属性，prototype属性是个指针,指向构造函数的原型对象
//原型对象可以使所有调用构造函数生成的实例对象共享它的属性和方法。

//instanceof
//遍历对象的原型链，直到找到构造函数的原型，就返回true，找不到返回false。