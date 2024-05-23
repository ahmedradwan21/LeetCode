class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) { //-121
            return false;
        }
        
        int sub = x;
        int reversed = 0;
        while (sub != 0) {
            reversed = reversed * 10 + sub % 10;
            sub /= 10;
        }
        
        return x == reversed;
    }
}