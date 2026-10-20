class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length){
            return false
        }
        const SArray = new Array(26).fill(0)
        for(let i =0;i<s.length;i++){
            const ind = s[i].charCodeAt(0)-'a'.charCodeAt(0)
            SArray[ind]++

        }

        const TArray = new Array(26).fill(0)
        for(let i =0;i<t.length;i++){
            const ind = t[i].charCodeAt(0)-'a'.charCodeAt(0)
            TArray[ind]++
        }
        if(SArray.join(',') === TArray.join(',')){
            return true
        }
        return false
    }
}
