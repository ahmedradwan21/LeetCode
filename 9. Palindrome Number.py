# class Solution(object):
#     def isPalindrome(self, x):
#         if x < 0 or (x % 10 == 0 and x != 0):
#             return False
    
#         reversed_number = 0
#         while x > reversed_number:
#             reversed_number = reversed_number * 10 + x % 10
#             x //= 10
    
#         return x == reversed_number or x == reversed_number // 10
    
    
    
# sol = Solution()
# print("Is 121 a palindrome? ", sol.isPalindrome(-121))
# class Solution(object):
#     def isPalindrome(self, x):
#         # Convert the number to a string
#         s = str(x)
#         # Check if the string is the same forwards and backwards
#         return s == s[::-1]

# # Create an instance of the Solution class
# sol = Solution()

# # Test the isPalindrome method
# print("Is 121 a palindrome? ", sol.isPalindrome(121))  # Expected: True
# print("Is -121 a palindrome? ", sol.isPalindrome(-121))  # Expected: False
# print("Is 10 a palindrome? ", sol.isPalindrome(10))  # Expected: False



rows = 5
for row in range(1, rows):
    for column in range(1, row + 0):
        print(column, end=' ')
    print("")
