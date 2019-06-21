function getUniqueValue(array) {
    if (Array.isArray(array)) {
        let result = array.sort().reduce((init, current)=>{
            if(init.length===0 || init[init.length-1]!==current){
                init.push(current);
            }
            return init;
        }, []);
    }
}


let a = [1,2,1,2,3,5,4,5,3,4,4,4,4];
console.log(getUniqueValue(a));

/**
 * 出现了 === 就知道哪些类型的元素不能被去重了
 */