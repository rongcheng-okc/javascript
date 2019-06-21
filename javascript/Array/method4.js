function getUniqueValue(array) {
    if (Array.isArray(array)) {
        const set = new Set(array);
        return Array.from(set);
    }
}

const a = [1, 1, 'wdd', 'wdd', { name: 'rc' }, { name: 'rc' }, { age: 26 }, Symbol(0), Symbol(0), [666, 999], [666, 999]];
console.log(getUniqueValue(a));

/**
 * 很遗憾，Set 的去重机制也是用 === 判断的，所以依然不满足所有
 */