var Person=function(name){
    this.name=name;
    //console.log(this.name);
};

Person.prototype.getName=function(){
    return this.name;
};

// var reader=new Person('wdd');
// console.log(reader.getName());

var Author=function(name,books){
    Person.call(this,name);
    this.books=books;
};
// 在 执行 new new Author('ygy','new LIFE') 时候，上面的就会先创建一个空对象{}, 
// 此时这个 this={} ，调用了Person的构造函数，创建了一个新对象，name属性有了值

Author.prototype=new Person();  // 这句就是为了给Author继承Person的属性和方法
Author.prototype.constructor=Author; // 说是设置了新的prototype之后，costructor被擦除了

Author.prototype.getBooks=function(){
    return this.books;
};

var author=new Author('ygy','new LIFE');
console.log(author.getName());
console.log(author.getBooks());
