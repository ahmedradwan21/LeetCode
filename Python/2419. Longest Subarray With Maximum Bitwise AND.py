class Solution(object):
    def longestSubarray(self, nums):
        
        length = 0
        count = 0
        max_val = max(nums)
        
        for num in nums:
            if num == max_val:
                count += 1
            else:
                count = 0
            length = max(length, count)
        return length
            