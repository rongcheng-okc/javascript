let o1 = {
    prop1: 1,
    prop2: {
        prop21: 21,
        prop22: 22
    }
};

let o2 = {
    prop1: 1,
    prop2: {
        prop21: 23,
        prop22: 22
    }
};

function compare(o1, o2) {
    if (!(!!o1 && !!o2)) return false;

    for (let prop in o1) {
        if (o1.hasOwnProperty(prop) && o2.hasOwnProperty(prop)) {
            if ((typeof o1[prop] === 'object') && (typeof o2[prop] === 'object')) {
                compare(o1[prop], o2[prop]);
            } else {
                if (o1[prop] !== o2[prop]) {
                    return false;
                }
            }
            
        } else {
            return false;
        }
    }

    return true;
}

console.info(compare(o1, o2));