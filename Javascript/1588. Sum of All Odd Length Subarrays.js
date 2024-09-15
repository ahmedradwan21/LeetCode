/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0

    for(let length=1; length<=arr.length; length += 2){
        for(let i = 0; i<=arr.length - length; i++){
            sum+=arr[i]
            if(length===1){
                continue;
            }
            for(let offset = 1; offset<length; offset++){
                sum+=arr[i+offset]
            }
        }
    }
    
    return sum;
};