class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const arr = []
        const prefix = []
        const suffix=[]
        let prefixProd = 1
        let suffixProd = 1
        for(let i = 0; i<nums.length; i++){
            prefixProd *= nums[i]
            prefix[i]=(prefixProd)
        }
        for(let i = nums.length-1; i>=0; i--){
            suffixProd *= nums[i]
            suffix[i]=suffixProd
        }
        for(let i = 0; i<nums.length; i++){
            let left= i==0 ? 1 : prefix[i-1]
            let right= i == (nums.length-1) ? 1 :  suffix[i+1]
            arr[i]= left*right 
        }
        return arr
    }
}
