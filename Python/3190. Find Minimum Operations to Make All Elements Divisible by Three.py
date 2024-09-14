class Solution:
    def solve(self,nums):
        num = 0
        for i in range(len(nums)):
            if nums[i]%3 != 0:	
                num += 1
        return num
    
solation = Solution()
print(solation.solve([1,2,3,4]))

