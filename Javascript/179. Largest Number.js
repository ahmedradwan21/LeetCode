/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums = nums.map(String)
    nums.sort((a,b)=>{
        if(a+b>b+a)return -1
        else if(a+b<b+a)return 1
        else return 0
    })
    if(nums[0]=='0')return '0'
    return nums.join('')
};