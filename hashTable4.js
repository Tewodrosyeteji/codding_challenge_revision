// majority element 


// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

const majorityElement=function(array){
  let half=array.length/2;
  let ht={};
  for(let i=0;i<array.length;i++){
       ht[array[i]]=(ht[array[i]] | 0) +1;
       if(ht[array[i]] > half){
        return array[i]
       }
  }
}

console.log(majorityElement([3,2,3]))