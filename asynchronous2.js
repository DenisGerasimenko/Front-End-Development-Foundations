class ReversePromise extends Promise {
    constructor(fn) {
        super(_ => _());
        this.fn = fn;
        this.stack = [];
    }
    then(fn) {
        this.stack.push(fn);
        return this;
    }

    run() {
        const p = new Promise(this.fn);
        let current = p;

        while (this.stack.length) {
            current = current.then(this.stack.pop());
        }

        return p;
    }
}

const revP = (new ReversePromise(res => {
    console.log(1);
    res();
})).then(_ => console.log(2))
    .then(_ => console.log(3))
    .then(_ => console.log(4)).run()