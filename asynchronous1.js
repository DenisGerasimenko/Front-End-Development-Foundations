1. const MyPromise = class {
    constructor (callback) {
        this.promise = new Promise (callback)
    }
    then (fn) {
        this.promise.then(fn); return this
    }
    synchThen (fn) {
        fn();
        return this
    }
}

const promise = new MyPromise((resolve) => {
    console.log(1)
    resolve()
}).synchThen(() => {
    console.log(2)
}).then(() => {
    console.log(3)
})
console.log(4)
