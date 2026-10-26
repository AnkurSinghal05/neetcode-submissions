class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length==0){
            return 0
        }
        let longest=0
        const arr = [...nums].sort((a,b)=>a-b)
            let count = 1
            for(let j =1; j<arr.length;j++){
               if(arr[j]==arr[j-1]){
                continue;
               }
                if(arr[j]==arr[j-1]+1){
                    count++
                }else{
                    longest= longest<count?count:longest
                    count=1
                }
            }
            longest= Math.max(longest,count)
            

        return longest
    }
}
