class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        for(let i = 0; i<strs.length;i++){
            const arr = new Array(26).fill(0)
            for(let j =0; j< strs[i].length; j++ ){
                const codeVal = strs[i].charCodeAt(j)
                if(codeVal>=97){ //
                    arr[codeVal-97]+=1
                }else{
                     arr[codeVal-65]+=1
                }
            }
            const signature = arr.join()
            if(map.has(signature)){
                map.get(signature).push(strs[i])
            }else{
                map.set(signature,[strs[i]])
            }
        }
        const res = []
        for(const [key,val] of map){
            res.push(val)
        }
        // console.log(map)
        return res
    }
}
