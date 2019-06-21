var x=3;
var foo1={
    x: 2
};

/* 1.对象方法中的this */
var foo={
    x: 1,
    getX: function() {
        return this.x;
    }
};
// console.log(foo.getX());
// console.log(foo.getX.call(foo1));

/* 2.构造函数中的this */
function Foo() {
    this.x=4;
    this.getX=function() {
        console.log(this.x);
    };
}
// var foo2=new Foo();
// foo2.getX();
var context={};
Foo.call(context);
// console.log(context.getX);

/* 函数直接打印 
如：context.getX 得到 
[Function]
如：context.getX.toString() 得到
function () {
        console.log(this.x);
    }
*/

/* 3.DOM处理函数中的this */
// DOMElement.addEventListener('click', function() {
//     console.log(this);
// });
/* 
把函数绑定到DOM事件上，就相当于在DOM上增加了一个函数，
当触发这个事件的时候调用DOM上对应的时间方法
*/
// DOMElement.clickHandler=function() {
//     console.log(this);
// };
// DOMElement.clickHandler();
// 所以这里的this就是这个元素

/* 4.普通函数中的this */
function getX() {
    console.log(this.x);
}

// getX();
// 普通函数的执行上下文是全局环境

/* 5.闭包中的this */
var foo4={
    x:4,
    y:44,
    getXY: function() {
        (function() {
            console.log('x: ',this.x);
            console.log('y: ',this.y);
        })();
    }
};
foo4.getXY();
/* 
这里出现了意想不到的结果，是输出了undefined，
(function() {
            console.log('x: ',this.x);
            console.log('y: ',this.y);
})();
这个函数的执行环境是全局的
*/ 