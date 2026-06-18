class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map ={}
        for(let i = 0; i<strs.length; i++){
            const arr = new Array(26).fill(0)
            for(let j=0; j<strs[i].length; j++){
                let index = strs[i][j].charCodeAt(0)-97;
                arr[index]++;
            }
            if(!map[arr.join()]){
                map[arr.join()] = [strs[i]]
            }else{
                map[arr.join()].push(strs[i])
            }
        }
        return Object.values(map)

    }
}
