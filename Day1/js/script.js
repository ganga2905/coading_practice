// 1.

// Reverse a string without using reverse().

// Input: "hello"
// Output: "olleh"

let name="hello";

let output='';

for(let i=0;i<name.length;i++){
    output+=name[i]
}

console.log(output);


// 2.

// Find the largest number in an array.

// Input: [10, 20, 50, 80, 30]
// Output: 80

let a=[10, 20, 50, 80, 30];

let max=a[0];

for(let i=0;i<a.length;i++){
    if(max<a[i]){
        max=a[i]
    }
}
console.log(max);


// 3.
// Count the number of vowels in a string.

// Input: "javascript"
// Output: 3

 let nameV="javascript";

 let vowels=["a","e","i","o","u","A","E","I","O","U"];


 let count=0;


 for(let i=0;i<nameV.length;i++){
    for(let k=0;k<vowels.length;k++){
        if(nameV[i]==vowels[k]){
            count++
        }
    }

 }

 console.log(count);
 
// 4.

// Check whether a string is a palindrome.

// Input: "madam"
// Output: true
 
let palinName="madam";

let result='';

for(let i=palinName.length-1;i>=0;i--){
    result+=palinName[i]
}
if(palinName==result){
    console.log(true);
    
}
else{
    console.log(false);
    
}

// 5.

// Find the second largest number in an array.

// Input: [10, 20, 50, 80, 30]
// Output: 50




/*6.

Remove duplicate elements from an array without using Set.

Input: [1,2,2,3,4,4,5]
Output: [1,2,3,4,5]
7.

Find the frequency of each element in an array.

Input: ["apple","banana","apple","orange","apple"]
8.

Move all zeros to the end of an array.

Input: [1,0,2,0,3,4,0]
Output: [1,2,3,4,0,0,0]
9.

Find the missing number.

Input: [1,2,3,5]
Output: 4
10.

Find common elements between two arrays.

arr1 = [1,2,3,4]
arr2 = [3,4,5,6]

Output: [3,4]*/