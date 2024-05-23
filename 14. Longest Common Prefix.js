/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) {
        return ''
    }
    for(let i=0; i<strs[0].length;i++){
        for(let f of strs){
            if(f[i] !== strs[0][i]){
                return f.slice(0, i);
            }
        }
    }
    return strs[0]
};

// first for loop for every string start postion 0
// second for loop for every postion 
//    if string not equel every word in all postion  