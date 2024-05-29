def two_sum(nums, target):
    fo = []
    for i in range(len(nums)):
        for j in range(i + 1 , len(nums)):
            if nums[i] + nums[j] == target:
                fo.extend([i, j])
    return fo



# print(two_sum([3, 3], 6))
