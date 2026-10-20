class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const boxes = Array.from({ length: 9 }, () => new Map());
        const rows = Array.from({ length: 9 }, () => new Map());
        const cols = Array.from({ length: 9 }, () => new Map());
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board.length; c++) {
                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                const item =board[r][c]
                if (item != ".") {
                    if(rows[r].has(item) ||   cols[c].has(item) || boxes[boxIndex].has(item)){
                        return false
                    }else{
                        rows[r].set(item,true)
                        cols[c].set(item,true)
                        boxes[boxIndex].set(item,true)
                    }
                }
            }
        }
        return true;
    }
}
