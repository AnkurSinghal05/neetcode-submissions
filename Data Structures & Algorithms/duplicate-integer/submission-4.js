class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map()
        for(const num of nums){
            if(map.get(num)){
                return true
            }else{
                map.set(num,true)
            }
        }
        return false
    }
}
