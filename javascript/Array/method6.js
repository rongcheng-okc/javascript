function getUniqueValue(array) {
    let tempArray = [];
    let targetArray = [];
    if (Array.isArray(array)) {
        for(let i = 0, l= array.length; i<l; i++) {
            handle(tempArray, targetArray, array[i]);
        }
    }
    return targetArray;
}

function handle(tempArray, targetArray, value) {
    if ((typeof item) === 'string' || (typeof item) === 'number') {
        if (!targetArray.includes(value)) {
            targetArray.push(value);
        }    
    } else {
        if(!tempArray.includes(JSON.stringify(value))) {
            tempArray.push(JSON.stringify(value));
            targetArray.push(value);
        }
    } 
}

const a = [1, 1, 'wdd', 'wdd', { name: 'rc' }, { name: 'rc' }, { age: 26 }, Symbol(0), Symbol(0), [666, 999], [666, 999]];
console.log(getUniqueValue(a));