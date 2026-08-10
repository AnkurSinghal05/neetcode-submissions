class Solution:

    def encode(self, strs: List[str]) -> str:
        ans=''
        for item in strs:
            ans+=item
            ans+='_akram_'
            

        print(ans)
        return ans

    def decode(self, s: str) -> List[str]:
        l=len(s)
        if len(s)==0:
            return []
        s=s[:l-7]
        
        return s.split('_akram_')
