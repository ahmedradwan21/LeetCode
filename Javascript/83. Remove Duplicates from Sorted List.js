/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class ahmed{
    constructor(){
        this.val = val;
        this.next = next;
    }
}
const deleteDuplicates = function(head){
    let ah = head
    while(ah && ah.next){
        if(ah.val == ah.next.val){
            ah.next = ah.next.next
        }else{
            ah = ah.next
        }
    }
    return head
}