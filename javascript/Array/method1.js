function transferValueToKey(array) {
    let obj = {};
    array.forEach(function(value) {
        obj[value] = true;
    });
    return obj;
}

function getUniqueValue(array) {
    let obj = [];
    if (Array.isArray(array)) {
        Object.keys(transferValueToKey(array)).forEach(function(key) {
            obj.push(key);
        });
    } 
    return obj;
}

const a = [1,1,1,33,55,88,100,100];
console.log(getUniqueValue(a));
/**
 * 一直觉得这是是一种数组去重的有效方法，code一看问题挺多
 * 1.数组元素类型只有是 number，string，symbol 类型时候才可行；
 * 2.最后生成的新数组会把原来的 number 类型值转成字符串了；
 * 3.两次循环，性能不好；
 */
