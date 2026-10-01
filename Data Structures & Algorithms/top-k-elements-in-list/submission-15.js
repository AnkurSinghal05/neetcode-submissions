class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (!map.has(nums[i])) {
                map.set(nums[i], 0);
            }
            map.set(nums[i],map.get(nums[i]) + 1)
        }

        const res = Array.from(map).sort((item1, item2) => item2[1] - item1[1]);
        console.log(map,res,res.slice(0,k))
        return res.slice(0,k).map((item) => item[0]);
    }
}
