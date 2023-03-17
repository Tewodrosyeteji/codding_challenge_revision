// Given two strings s and t, determine if they are isomorphic. 
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character 
// while preserving the order of characters. No two characters may map to the same character, 
// but a character may map to itself. s and t consist of any valid ascii character. 

const isomorphicHashTable=function(s,t){

   if(s.length !==t.length) return false;
   let sHash={};
   let tHash={};

   for(let i=0;i<s.length;i++){
    if(!sHash[s[i]]) sHash[s[i]]=t[i];

    if(!tHash[t[i]]) tHash[t[i]]=s[i];
    
    if((sHash[s[i]] !== t[i]) || (tHash[t[i]] !== s[i])) return false
   }
   return true;
   }

 


console.log(isomorphicHashTable("as","bc"))