//Reverse String:


function reverse (str){
    let rev='';
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i]
    }
    return rev

}
console.log(reverse("ganga"));


// Find Max in Array:-

function findMax(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }

    return max

}
console.log(findMax([1,50,250,620]));


//. Palindrome Check:-

function plaindrome(str){
    

}
console.log(plaindrome("madam"));


