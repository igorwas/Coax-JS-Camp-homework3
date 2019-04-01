
//task #1
let createCounter =  function(){
    let counter = 0;

    return function (){
        return ++counter;
    }
}

let counter = createCounter();
console.log("Task #1.Counter\n")
console.log(counter())
console.log(counter())
console.log(counter())

//task #2
let random100 = function(){
    let randomedArray = [];
    
    return function newRandomNumber(){
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        if(!randomedArray.includes(randomNumber) || randomedArray.length <= 100){
            randomedArray.push(randomNumber);
            //just for showing final array
            if(randomedArray.length == 100) console.log(randomedArray.sort((a, b) => a - b));
        }else {
            newRandomNumber()
        }
    }
}

let random = random100();
console.log("Task #2.Random unique elements from 1 to 100\n")
for( let i = 0; i < 100 ; i++){
    random();
}

//task #3
let foo = function(firstMultiplier){
    return function(secondMultiplier){
        return function ( thirdMultiplier){
            return firstMultiplier * secondMultiplier * thirdMultiplier;
        }
    }
}; 

console.log("Task #3.Multiplication of 3 elements");
console.log(foo(3)(3)(3));