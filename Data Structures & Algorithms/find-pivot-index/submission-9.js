class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let totalSum = 0, left = 0
        for(let i = 0; i<nums.length; i++){
          totalSum+=nums[i] 
        }
        
        for(let i = 0; i<nums.length; i++){
            let right = totalSum - left - nums[i]
            if(left === right){
                return i
            }
            left+=nums[i]
        }
        return -1
    }
}
