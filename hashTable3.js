// You're given strings jewels representing the types of stones that are jewels, 
// and stones representing the stones you have. 
// Each character in stones is a type of stone you have. 
// You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

const jewelsAndStones=function(j,s){
   const  ht={};
    let count=0;
    for(let i=0;i<j.length;i++){
        if(!ht[j[i]]) ht[j[i]]=i;
    }
    for(let i=0;i<s.length;i++){
        if(s[i] in ht){
            count++;
        }
    }
    return count;
}
console.log(jewelsAndStones( "z", "ZZ"))