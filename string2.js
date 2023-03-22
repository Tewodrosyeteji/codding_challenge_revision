const palindrome=function(string){

    let reverseString='';
    for(let i=string.length-1;i>=0;i--){
        reverseString +=string[i];
    }
    if(string===reverseString){
        return true;
    }
    return false;
}

const palindromeArray=function(str){
    let reverseString=[];
    for(let i=str.length-1;i>=0;i--){
        reverseString.push(str[i])
    }

    if(reverseString.join('') === str){

        return true;
    }

    return false;
}

const palindromePointer=function(str){
    let i=0;
    let j=str.length-1;
    while(i<=j){
        if(str[i] !== str[j]) return false;
        else{
            i++;
            j--;
        }
    }
    return true;
}

console.log(palindromePointer('abcba'))