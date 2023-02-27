//8.Write a function to convert dollars to tenge.
console.log ("First problem (#8)") //To distinguish the results of different problems in the console
function DollarsToTenge(Dollars) {
    let TengeExchangeRate = 447.35;
    let Tenge = Dollars * TengeExchangeRate;
    return (Dollars + " US dollars = " + Tenge + " Kazakhstani tenge")
}
console.log(DollarsToTenge(1))
console.log(DollarsToTenge(25))
console.log(DollarsToTenge(200))
//11.Write a function to check whether a given number is even or odd.
console.log ("Second problem (#11)") //To distinguish the results of different problems in the console
function EvenOrOdd(num) {
    if (num % 2 == 0) {
        return(num + " is even.")
    }
    else {
        return(num +" is odd.")
    }
}
console.log(EvenOrOdd(0))
console.log(EvenOrOdd(1.7))
console.log(EvenOrOdd(24))

//13.	Write a function that returns the greatest among the given two numbers.
console.log ("Third problem (#13)") //To distinguish the results of different problems in the console
function Greatest(num1, num2) {
    if (num1 > num2) {
        return  (num1 + " is the greatest among " + num1 + " and " + num2 +".")
    }
    else if (num1 == num2) {
        return (num1 + " and " + num2 + " are equal.")
    }
    else {
        return (num2 + " is the greatest among " + num1 + " and " + num2 + ".")
    }
}
console.log(Greatest(1,6))
console.log(Greatest(74,47))
console.log(Greatest(8,8))