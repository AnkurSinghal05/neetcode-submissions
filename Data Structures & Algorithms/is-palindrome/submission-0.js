class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const rev = [];
        const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        for (let i = 0; i < cleaned.length; i++) {
            rev.push(cleaned.charAt(cleaned.length - i - 1));
        }

        if (rev.join('') == cleaned) {
            return true;
        }
        return false;
    }
}
