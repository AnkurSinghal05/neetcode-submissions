    const key = "_ankur_"


class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       let enc = ""
        for(let i = 0; i<strs.length; i++){
            enc=enc+strs[i]+key
        }
        return enc
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */

    decode(str) {
        if(str.length==0){
            return []
        }

        return str.slice(0,str.length-key.length).split(key)
        


    }
}
