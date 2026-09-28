class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
         
        for(let i = 0; i<nums.length; i++){
            const toFind = target - nums[i]
            if(map.has(toFind)){
                return [map.get(toFind),i]
            }else{
                map.set(nums[i],i)
            }
        }
    }
}
