class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        for(let i = 0; i<nums.length; i++){
            if(map.has(nums[i])){
                let curr = map.get(nums[i])
                map.set(nums[i], curr+1)
            }else {
                map.set(nums[i], 1)
            }
        }
        return [...map.entries(map)].sort((arr1, arr2) => arr2[1] - arr1[1]).slice(0,k).map(item => item[0])
    }
}
