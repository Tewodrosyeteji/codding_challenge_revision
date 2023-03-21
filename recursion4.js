// find the powerset of the given array 


const powerset=function(nums){
 const output=[];

 const helper=function(nums,i,subset){
        if(i===nums.length){
    output.push(subset.slice());
    return;
 }
 //don't add
    helper(nums,i+1,subset);
// add
  subset.push(nums[i]);
  helper(nums,i+1,subset);
  subset.pop();
 }
 helper([1,2,3],0,[]);
 return output;
}

console.log(powerset([1,2,3],0,[]))