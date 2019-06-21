/*场景：有两个功能，可以开始和停止动画*/

/*1：最简单的函数*/
function startAnimation(){}
function stopAnimation(){}

/*1：使用对象*/
var Anim=function(){
    name: 'Anim'
};

// 两种直接向原形添加属性函数
// Anim.prototype.start=funciton(){}
// Anim.prototype.stop=function(){}

// Anim.prototype={
//     start: function(){},
//     stop: function(){}
// };

Function.prototype.method=function(name,fn){
    this.prototype[name]=fn;
    // 可以链式调用,this就是Function这个对象
    //console.log(this);
    return this;
};

// 一般的函数添加
// Anim.method('start',function(){console.log('start...')});
// Anim.method('stop',function(){console.log('stop...')});

Anim.
    method(
    'start',function(){ 
        console.log('start...');  
    }).
    method(
    'stop',function(){
        console.log('stop...');
    });

var a=new Anim();
a.start();
a.stop();