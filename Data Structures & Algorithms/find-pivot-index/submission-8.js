class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {

        const prefix = new Array(nums.length)

        for (let i = 0; i < nums.length; i++) {
            if (i == 0) {
                prefix[i] = nums[i]
                continue
            }
            prefix[i] = prefix[i - 1] + nums[i]

        }
        for (let i = 0; i < nums.length; i++) {
            let left = i == 0 ? 0 : prefix[i - 1],
                right = prefix[nums.length - 1] - left - nums[i]
            if (left == right) {
                return i
            }
        }
        return -1
    }
}
