// You are given an array of Integers in which each subsequent value is not less than the previous value. 
// Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.
// [1,4,7,3,2]



// method one 
const sortedSquaredArray=function(array){
   return map(num=>num*num).sort((a,b)=>a-b);
}

const sortedSquaredArrayLoop=function(arr){

                // let newArray=[];
                // for(let i=0;i<arr.length;i++){
                //     newArray.push(arr[i]*arr[i]);
                // }
                // newArray.sort((a,b)=> a-b);

    // alternative approch

    const newArray=new Array(arr.length).fill(0);

    for(let i=0;i<arr.length;i++){
        newArray[i]=Math.pow(arr[i],2);
    }
    newArray.sort((a,b)=> a-b);
return newArray;

// t=o(nlogn) s=o(n)
}

// method two

const sortedSquaredArrayOn=function(arr){
    let pointerLeft=0;
    let pointerRight=arr.length -1;
    const newArray=new Array(arr.length).fill(0);
  for(let i=arr.length-1;i>=0;i--){
      let leftSquared=Math.pow(arr[pointerLeft],2);
      let rightSquard=Math.pow(arr[pointerRight],2);
      if(leftSquared>rightSquard){
        newArray[i]=leftSquared;
        pointerLeft++;
      }else{
        newArray[i]=rightSquard;
        pointerRight--;
      }

  }
  return newArray;

  // t=o(n) s=o(n)
}

console.log(sortedSquaredArrayOn([-2,-1,0,3,5]))