class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
 pivotIndex(nums) {
        const prefix = new Array(nums.length)
        const suffix = new Array(nums.length)
        for(let i = 0; i<nums.length; i++){
            if(i==0){
                prefix[i] = nums[i]
                suffix[nums.length-1-i] = nums[nums.length-1-i]
                continue
            }
            prefix[i] = prefix[i-1] + nums[i]

            suffix[nums.length-1-i] = suffix[nums.length-1-i+1] + nums[nums.length-1-i]
        }
        console.log(prefix, suffix)
        for(let i = 0; i<nums.length; i++){
            if((prefix[i-1]??0) ==(suffix[i+1]??0)){
                return i
            }
        }
        return -1
        
    }
}
