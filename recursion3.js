// Given an array of distinct integers, return all the possible permutations. 
// You can return the answer in any order.

const allPermutations=function(arr){
    const permutations=[];
    const helper=function(arr,i){
         if(i === arr.length-1){
            permutations.push(arr.slice());
            return;
         }
         for(let j=i;j<arr.length;j++){
            [arr[i],arr[j]]=[arr[j],arr[i]];
            helper(arr,i+1);
            [arr[i],arr[j]]=[arr[j],arr[i]];
         }

    }

    helper(arr,0);
    return permutations;
}

allPermutations([1,2,3]);