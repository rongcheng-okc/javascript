// (function(){
//     var first=4;
//     var second=5;
//     var total=function(){
//         return first+second;
//     };
// })();
// total();

// 闭包里的函数外面访问不到
// F:\design\closefolder.js:8
// total();
// ^
// ReferenceError: total is not defined

function foo(){
    var a=2;

    function bar(){
        a*=3;
        return a;
    }

    return bar;
}

var r1=foo();
// console.log(r1.toString());
// function bar(){
//         a*=3;
//         return a;
//     };
// a=2; 首次

//r1();
//console.log(r1());   // a=18 2*3*3

// var Book=function(newName,newAuthor){

//     var name, author;
//     // 相当于是私有属性
//     this.setName=function(newName){
//         name=newName||'life';
//     };
//     this.setAuthor=function(newAuthor){
//         author=newAuthor||'wdd';
//     };

//     this.getName=function(){
//         return name;
//     };
//     this.getAuthor=function(){
//         return author;
//     };

//     this.setName(newName);
//     this.setAuthor(newAuthor);
// };

var Book=(function(){
    var numOfBooks=0;
    var FLAG=003;

    function showNum(){
        console.log('numOfBooks: '+numOfBooks);
    }

    var constru= function(newName,newAuthor){

    var name, author;
    // 相当于是私有属性
    this.setName=function(newName){
        name=newName||'life';
    };
    this.setAuthor=function(newAuthor){
        author=newAuthor||'wdd';
    };

    this.getName=function(){
        return name;
    };
    this.getAuthor=function(){
        return author;
    };

    this.setName(newName);
    this.setAuthor(newAuthor);
    numOfBooks++;
    showNum();
    };

    constru.GET_FLAG=function(){
        console.log(FLAG);
    };

    return constru;
})();

Book.prototype={
    display: function(){
        console.log('This book\'s'+' name is '+this.getName()+' and author is '+this.getAuthor()+' .');
    }
};

Book.getNum=function(num){
    console.log(num);
};

// var book=new Book('BEAUTY LIFE','ygy');
// book.getNum(7);  这句是错误的，这个方法是直接绑定在Book这个对象上的
// book.display();
// Book.GET_FLAG();  构造函数的成员
// Book.getNum(9);  这就是个普通的对象上增添了一个方法
// book.getAuthor(); 此时这句就访问不到任何信息

