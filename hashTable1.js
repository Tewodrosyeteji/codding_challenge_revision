// You are given an array of Integers and another integer targetValue. 
// Write a function that will take these inputs and 
// return the indices of the 2 integers in the array that add up targetValue.

const returnIndices=function(arr,target){
  
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] + arr[j] === target){
                return [i,j]
            }
        }
    }
    return [];
    // t=o(n^2) s=o(1)

}

// hashtable
const returnIndicesHashTable=function(array,target){
    const ht={};
    let neededValue;
    for(i=0;i<array.length;i++){
    neededValue=target-array[i];
        if( neededValue in ht){
            return [i,ht[neededValue]]
        }else{
        ht[array[i]]=i;
        }
    }
    return [];

    // t=o(n) s=o(n)
}

returnIndicesHashTable([2,3,4,6,7],10);