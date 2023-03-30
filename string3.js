// return the longest substring from the given string

const maxSubString=function(string){
    let max=0;
    let start=0;
    const seen={};
    for(let i=0;i<string.length;i++){
        let char=string[i];
        if(char in seen){
            start=Math.max(start,seen[char]+1);
        }
        max=Math.max(max,i-start+1);
        seen[char]=i;
    }
    return max;
}

console.log(maxSubString('abcdba'));