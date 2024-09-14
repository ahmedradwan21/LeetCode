class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(ele) {
        this.stack1.push(ele);
    }

    pop() {
        if (!this.stack2.length) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    peek() {
        if (!this.stack2.length) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    empty() {
        return !this.stack1.length && !this.stack2.length;
    }
}
