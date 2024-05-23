var twoSum = function(nums, target) {
    let fo = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                fo.push(i, j);
            }
        }
    }
    return fo;
};

console.log(twoSum([3, 3], 6));  // Output: [0, 1]