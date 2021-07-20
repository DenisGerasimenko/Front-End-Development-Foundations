class Vector {
    constructor(arr) {
        this.arr = arr;
    }

    add(b) {
        if (this.arr.length !== b.arr.length) {
            throw Error('Vectors are not same length.');
        }
        return new Vector(
            this.arr.map((v, i) => {
                return v + b.arr[i];
            })
        );
    }

    subtract(b) {
        if (this.arr.length !== b.arr.length) {
            throw Error('Vectors are not same length.');
        }
        return new Vector(
            this.arr.map((v, i) => {
                return v - b.arr[i];
            })
        );
    }

    dot(b) {
        if (this.arr.length !== b.arr.length) {
            throw Error('Vectors are not same length.');
        }
        return new Vector(
            this.arr
                .map((v, i) => {
                    return v * b.arr[i];
                })
                .reduce((a, b) => a + b)
        ).arr;
    }

    norm() {
        return Math.sqrt(
            this.arr
                .map((v, i) => {
                    return v * v;
                })
                .reduce((a, b) => a + b)
        );
    }

    equals(b) {
        if (this.arr.length !== b.arr.length) {
            return false;
        }

        for (var i = 0, length = this.arr.length; i < length; i++) {
            if (this.arr[i] !== b.arr[i]) {
                return false;
            }
        }
        return true;
    }

    toString() {
        return `(${this.arr.join(',')})`;
    }
}