class Solution(object):
    def minimumSum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        temp = []
        for i in range(0, len(nums)):
            for j in range(i + 1, len(nums)):
                for k in range(i + 1, len(nums)):
                    if (i < j < k) and (nums[i] < nums[j] and (nums[k] < nums[j])):
                        temp.append(nums[i] + nums[j] + nums[k])
        
        if temp: return min(temp)
        else: return -1