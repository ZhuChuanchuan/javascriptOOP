/**
 * Created by Administrator on 2017/2/28 0028.
 */

function Cat(name,color){
    this.name=name;
    this.color=color;
}
/* 每个构造函数都有一个prototype属性指向另一个对象，这个对象的所有属性和方法，都会被构造函数的实例继承 */
/* prototype让属性方法在内存中只生成一次，提高了运行效率 */
Cat.prototype.type="猫科动物";
Cat.prototype.eat=function(){alert("吃老鼠！")}

function Animal(){
    this.species="动物";
}

function NewCat(name,color){
    Animal.call(this,arguments);
    this.name=name;
    this.color=color;
}
function Dog(name,color){
    this.name=name;
    this.color=color;
}
function NewAnimal(){
    this.species="动物";
}
//继承 封装成一个函数
function extend(Child,Parent){
    var F=function(){};
    F.prototype=Parent.prototype;
    Child.prototype=new F();
    Child.prototype.constructor=Child;
    Child.uber=Parent.prototype;
}