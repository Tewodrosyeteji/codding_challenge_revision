// find non repeating character in burutforce method


const findNOnRepeatingCharacter=function(string){
    let repeat;
    for(let i=0;i<string.length;i++){
        repeat=false;
        for(let j=0;j<string.length;j++){
            if(string[i]===string[j] && i!==j){
                repeat=true;
            }
        }
        if(repeat===false){
            return i;
        }
    }
    return null;
}

// using hash table  

const findNOnRepeatingCharacterHash=function(string){
      const ht={};
      for(let i=0;i<string.length;i++){
        if(string[i] in ht){
           ht[string[i]]++;
        }else{
            ht[string[i]]=1;
        }
      }
    for(let i=0;i<string.length;i++){
        if(ht[string[i]]===1){
            return i;
        }
    }
    return null;


}

console.log(findNOnRepeatingCharacterHash('abcab'));