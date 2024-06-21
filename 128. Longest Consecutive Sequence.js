/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(a) {
    if(a.length < 1) return 0
    
    //initialization variables
    let sum = 1 
    let max = 1
    
    //sort the array in-order to make things easy
    a.sort((a,b)=>a-b)
    
    //basic iteration
    for(let i = 0 ; i < a.length  ; i++){
        // couting streak
        if(a[i+1]-a[i] == 1){
            sum+=1
             max = Math.max(sum , max)
        }else if(a[i+1] == a[i]){ //eliminting duplicate letters
            continue
        }else if(a[i+1] -a[i] !== 1){ //if streak breaks reset sum
            sum = 1
        }
        
       
    }
    
    return max
};
