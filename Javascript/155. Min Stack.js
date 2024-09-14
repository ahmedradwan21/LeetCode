class MinStack {
    constructor() {
        this.stack = [];
        this.min = Infinity;
    }
    
    push(x) {
        const valMinPair = { val: x, prevMin: this.min };
        this.stack.push(valMinPair);
        this.min = Math.min(this.min, x);
    }
    
    pop() {
        if (this.stack.length === 0) {
            console.error("Stack is empty. Cannot pop.");
            return;
        }
        
        const { val, prevMin } = this.stack.pop();
        this.min = prevMin;
        return val;
    }
    
    top() {
        return this.stack[this.stack.length - 1].val;
    }
    
    getMin() {
        return this.min;
    }
}
