class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        let res = []
        for(let i = 0; i< strs.length; i++){
            const signature = strs[i].split('').sort().join('')
            if(map.has(signature)){
                map.set(signature,[...map.get(signature),strs[i]])
            }else{
                map.set(signature,[strs[i]])
            }
        }
        for( let [key,value] of map ){
            res.push(value)
        }
        return res
    }
}
