public class Solution {
    public int candy(int[] ratings) {
        // initialize
        int candy[] = new int[ratings.length];
        int sum = 0;
        Arrays.fill(candy,1); // crucial step!
        
        // forward pass, assign candy for increasing ones
        for(int i = 1;i < ratings.length;i++)
            if(ratings[i] > ratings[i-1])
                candy[i] = candy[i-1]+1;
                
        // backforward pass, assign candy for decreasing ones
        for(int i = ratings.length-2;i >= 0;i--)
            if(ratings[i] > ratings[i+1]){
                if(i-1 >= 0 && ratings[i-1] <= ratings[i])
                    candy[i] = Math.max(candy[i+1]+1, candy[i]);
                else
                    candy[i] = candy[i+1] + 1;
            }
        
        // sum up candy
        for(int i = 0;i < candy.length;i++)
            sum += candy[i];
        return sum;
    }
}