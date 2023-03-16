// An array is monotonic if it is either monotone increasing or monotone decreasing. 
// An array is monotone increasing if all its elements from left to right are non-decreasing. 
// An array is monotone decreasing if all  its elements from left to right are non-increasing. 
// Given an integer array return true if the given array is monotonic, or false otherwise. 

const monotonicArray=function(arr){
const start=arr[0];
const end=arr[arr.length-1];
if(start>end){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]< arr[i+1]){
            return false;
        }
    }
}else if(start<end){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }
}else{
    for(let i=0;i<arr.length-1;i++){
    if(arr[i+1] !== arr[i]){
        return false;
    }
        }
    }
    return true;

    // t=o(n)  s=o(1)
}


console.log(monotonicArray([2,1,3,4]));