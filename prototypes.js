function myNew(Constructor, ...arg) {
    let obj = Object.create(Constructor.prototype);
    let result = Constructor.apply(obj, [...arg]);

    if ( typeof result == 'undefined') {
        return obj;
    } else if (typeof result == 'string') {
        return obj;
    } else if (typeof result == 'boolean') {
        return obj;
    } else if (result == null) {
        return obj;
    } else {
        return result;
    }
}
console.log(myNew(Array, 10));