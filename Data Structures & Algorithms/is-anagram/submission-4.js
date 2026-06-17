class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length){
            return false
        }
        const arr = new Array(26).fill(0)

        for(let i=0; i<s.length;i++){
            let index = s[i].charCodeAt(0)-97
            let index2 = t[i].charCodeAt(0)-97
            
            arr[index]++
            arr[index2]--
        }

        return arr.every(x=>x==0)
        
    }
}
