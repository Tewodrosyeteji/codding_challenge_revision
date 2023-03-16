// Given an array, rotate the array to the right by k steps, where k is non-negative.
const rotateArray=function(arr,n){
  const length=arr.length;
  let k=n%length;
  let temp=arr.slice(length - k);
  for(let i=length-k-1;i>=0;i--){
     arr[i+k]=arr[i]
  }
  for(let i=0;i<k;i++){
    arr[i]=temp[i];
  }
  return arr;

  // t=o(n) s=o(k)
  
}


const reverseArray=function(nums,start,end){
    while(start<end){
     [nums[start],nums[end]]=[nums[end],nums[start]];
        start++;
        end--;
    }

   }
const rotateArrayReverse=function(arr,n){
    let k=n%arr.length;
      reverseArray(arr,0,arr.length-1);
      reverseArray(arr,0,k-1);
      reverseArray(arr,k,arr.length-1);
      return arr;
}


console.log(rotateArrayReverse([1,2,3,4],2))  // 4,1,2,3 -> 3,4,1,2 -> 2,3,,4,1 -> 1,2,3,4