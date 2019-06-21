function getUniqueValue(array) {
    var source = [];
    if (Array.isArray(array)) {
        return array.filter(function(value) {
            if (!source.includes(value)) {
                source.push(value);
                return true;
            }
        });
    }
}

const a = [1, 1, 'wdd', 'wdd', { name: 'rc' }, { name: 'rc' }, { age: 26 }, Symbol(0), Symbol(0), [666, 999], [666, 999]];
console.log(getUniqueValue(a));