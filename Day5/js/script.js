let num=[2,50,36,11,45,66];

let even=[]

for(let i=0;i<num.length;i++){
    if(num[i]%2==0){
        even.push(num[i])

    }
}

let odd=even.sort((a,b)=>b-a)
console.log(odd);


