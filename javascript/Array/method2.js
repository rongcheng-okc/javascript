function getUniqueValue(array) {
    let targetArray = [];
    if (Array.isArray(array)) {
        array.forEach(function(value) {
            if(!targetArray.includes(value)) {
                targetArray.push(value);
            }
        });
    }
    return targetArray;
}

const a = [1, 1, 'wdd', 'wdd', { name: 'rc' }, { name: 'rc' }, { age: 26 }, Symbol(0), Symbol(0), [666, 999], [666, 999]];
console.log(getUniqueValue(a));

/**
 * 这个方法也是有缺陷，只能去重 number， string 类型的值，还好性能是比方法一好多了；
 * 也可以用 indexOf() 去判断是否存在，如果返回 -1 ，表示不存在；
 * 但无论是 includes() 还是 indexOf()，他们判断元素都是用 === ，所以只能判断基础类型
 */