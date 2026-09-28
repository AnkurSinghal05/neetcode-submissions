class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        for(let i =0; i<strs.length; i++){
            let signature  = strs[i].split('').sort().join("")
            if(map.has(signature)){
                map.get(signature).push(strs[i])
            }else {
                map.set(signature,[strs[i]])
            }
        }
        const res = []
        for(const [key,value] of map){
            res.push(value)
        }
        return res
    }
}
