const fibonacciRecursion=function(num){
    if(num <=1) return num;
   else{
   return fibonacciRecursion(num-1) +fibonacciRecursion(num-2)
    }
}

const fibonacciHashTable=function(num){
  let ht={
    0:0,
    1:1,
  }

    if(num in ht){
        return ht[num];
       }else{
        ht[num]=fibonacciHashTable(num-1) + fibonacciHashTable(num-2);
        return ht[num];
       }

  
}

const fibonacciIteration=function(num){
    let preNum=0;
    let currNum=1;
    let result=0;
    while(currNum<num){
        result = currNum + preNum;
        currNum += preNum;
        preNum=currNum-preNum;
        
    }
    return result
}

const fibonacciIterationSwap=function(num){
    if(num<=1) return num;
    let counter=1;
    let preNum=0;
    let currNum=1;
    let nextNum;
    while(counter<num){
        nextNum=preNum +currNum;
        preNum=currNum;
        currNum=nextNum;
        counter++
    }
    return currNum;
}

console.log(fibonacciIterationSwap(5))