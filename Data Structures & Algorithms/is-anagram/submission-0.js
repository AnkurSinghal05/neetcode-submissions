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
        const map = {}
        const map2 ={}
        for(let i=0,j=0; i<s.length;i++){
            if(map[s[i]]){
                map[s[i]]++
            }else{
                map[s[i]] =1
            }
            if(map2[t[i]]){
                map2[t[i]]++
            }else{
                map2[t[i]] =1
            }
        }
        for (let char in map){
            if(map[char] !== map2[char]){
                return false
            }
            
        }
        return true
        
    }
}
