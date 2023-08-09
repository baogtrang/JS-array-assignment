var intArray = [];

//  INTEGER USER INPUT
function addIntNumbers(){
    var number = document.querySelector("#number").value * 1;
    //takes multiple user inputs into the intArray
    intArray.push(number);
}

// ADDING ALL POSITIVE NUMBERS  
function positiveIntegerSum(){
    var positiveIntegerSum = 0;
    for (var i = 0;i < intArray.length; i++){
        if (intArray[i]>0){
            positiveIntegerSum+=intArray[i];
        }
    }
    document.querySelector(".result1").innerText = `The sum of all positive interger: ${positiveIntegerSum}` ;
    document.querySelector(".result1").classList.add("text-success", "display-3")
}

//  COUNTING POSITIVE NUMBERS
var positiveIntegerCount = 0;
function countPositiveIntegers(){
    for (var i = 0; i < intArray.length; i++) {
        if (intArray[i] > 0){
          positiveIntegerCount++;
         }
    }
    document.querySelector(".result2").innerText =`The number of positive integer: ${positiveIntegerCount}`;
    document.querySelector(".result2").classList.add("text-success", "display-3");
}

// FINDING THE SMALLEST INTEGER
var smallest = Number.MAX_SAFE_INTEGER;
function findSmallest(){
    for (var i = 0; i < intArray.length; i++){
        if (intArray[i] < smallest){
            smallest=intArray[i];
        }
    }
    document.querySelector(".result3").innerText=`The smallest integer: ${smallest} `
}

// FIND THE SMALLEST POSITIVE INTEGER
var smallestPositive = Number.MAX_SAFE_INTEGER;
function findSmallestPositveInt() {
    for (var i = 0; i < intArray.length; i++){
        if (intArray[i] > 0 && intArray[i] < smallestPositive){
            smallestPositive=intArray[i];
        }
    }
    document.querySelector(".result4").innerText=`The smallest positive integer: ${smallestPositive}`
}

// FINDING THE LAST EVEN INTEGER
function findLastEvenInt(){
    for (var i = intArray.length - 1; i >= 0; i--){
        if (intArray[i] % 2 ==0) {
          document.querySelector(".result5").innerText = `The last ${intArray[i]}`;  
        }
    }
}

//  SWAPPING 2 NUMBERS
function swap2Numbers(){
    var num1Index = document.querySelector("#num1").value*1;
    var num2Index = document.querySelector("#num2").value*1;
    var temp = 0;
    var num1 = intArray[num1Index];
    var num2 = intArray[num2Index];
    temp = num2;
    num2 = num1;
    num1 = temp;
    document.querySelector(".result6").innerText = `The first number has now become ${num1}, and the second number ${num2}.`;
}

// ARRANGING THE intArray IN ASCENDING ORDER
function ascend(){
    var ascendingintArray = intArray.sort((a,b) => a-b);
    document.querySelector(".result7").innerText = `The intArray in ascending order: ${ascendingintArray}`;
    /*
    The code (a, b) => a - b is a lambda function. A lambda function is a short, anonymous function that can be used as an expression. In this case, the lambda function is used as the compare function for the sort() method.
    The lambda function takes two arguments, a and b, which are the elements of the intArray that are being compared. The lambda function returns the difference between a and b. This means that the elements of the intArray will be sorted in ascending order from smallest to largest.
     */   
}

// FINDING THE FIRST PRIME NUMBER
function isPrime(num){
    if (num <= 1){
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++ ){
        if ((num%i)==0){
            return false;
        }         
    } 
    return true;
}
function findFirstPrime() {
    var primeFound = false;
    for (var i = 0; i < intArray.length; i++){
        if (isPrime(intArray[i])){
            document.querySelector(".result8").innerText = `The first prime number: ${intArray[i]}`;
            primeFound = true;
            break;
        } 
        
    }

    if (!primeFound) {
        document.querySelector(".result8").innerText = `There is no prime number in the intArray.`
    }
}

// REAL NUMBER USER INPUT
function addRealNumbers(){
    var realNumber =document.querySelector("#realNumber").value*1;
    intArray.push(realNumber);
    console.log(intArray)
}
// COUNTING INTEGERS
var integerCount = 0;
function countIntegers(){
    for (var i=0; i < intArray.length; i++){
        if(Number.isInteger(intArray[i])){
            integerCount++;
        }
    }
    document.querySelector(".result9").innerText = `The number of integers in the array: ${integerCount}`;
}

// COMPARING THE NUMBER OF POSITIVE INTEGERS AND NEGATIVE INTEGERS
function compare(){
    var positiveNum=0;
    var negativeNum=0;
    for (var i = 0; i<intArray.length; i++){
        if(intArray[i]>0){
            positiveNum++;
        }   
        else if(intArray[i]<0){
        negativeNum++;
        }
    }
    if (positiveNum > negativeNum){
        document.querySelector(".result10").innerText = "There are more positive numbers than negative numbers.";
    }
    else if (positiveNum < negativeNum){
        document.querySelector(".result10").innerText = "There are fewer positive numbers than negative numbers.";
    }
    else {
        document.querySelector(".result10").innerText = "The number of postive numbers and the number of negative numbers are equal";
    } 
}











































































































































































