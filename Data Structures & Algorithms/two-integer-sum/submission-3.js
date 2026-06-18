class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for(let i = 0; i<nums.length;i++){
            map.set(nums[i], i);
        }
        for(let i=0; i<nums.length;i++){
            let j = target-nums[i]
           if (map.has(j) && map.get(j)!==i) 
            return [i,map.get(j)]
        }
    }
}
