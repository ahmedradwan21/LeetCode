/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

class ahmed{
    constructor(val = null , next = null){
        this.val =  val
        this.next =  next
    }
}

var removeElements = function(head, val) {
    let ah = new ahmed(-1, head)
    let prev = ah
    let curr = head 
    while(curr){
        if(curr.val == val){
            prev.next = curr.next 
            curr = curr.next
        }else{
            prev = curr 
            curr = curr.next
        }
    }
    return ah.next
};