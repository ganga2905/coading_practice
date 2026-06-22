// 1. Find the factorial of a number
// Input: 5
// Output: 120;

let num=5;
let output=1;

for(let i=1;i<=5;i++){
    output=output*i

}

console.log(output);

// 2. Check if a number is prime
// Input: 7
//Output: true

// 3. Find the sum of all numbers in an array
// Input: [1,2,3,4,5]
// Output: 15

let num1=[1,2,3,4,5];

let output1=0;

for(let i=0;i<num1.length;i++){

    output1+=num1[i]
};
console.log(output1);


// 4. Find the longest word in a sentence
// Input: "I love javascript programming"
// Output: "programming"


/*

5. Capitalize first letter of each word
Input: "hello world"
Output: "Hello World"
6. Sort an array without using sort()
Input: [5,3,8,1]
Output: [1,3,5,8]
7. Check if two strings are anagrams
Input:
listen
silent

Output: true
8. Find the first non-repeated character
Input: "javascript"
Output: "j"
9. Flatten a nested array
Input: [1,[2,3],[4,[5]]]
Output: [1,2,3,4,5]
10. Find duplicate elements
Input: [1,2,2,3,4,4,5]
Output: [2,4]*/