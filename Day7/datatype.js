function fullName(){
    console.log('Van Tran')

}
fullName()

function fullName2(firstName, lastName){
    console.log(`My full name is ${firstName} ${lastName}`)
}
fullName2("Van", "Tran")

function addNumber(num1, num2){
    return num1 + num2
}
console.log(addNumber(2,3))

function perimeterOfRectangle(length, width){
    let perimeter = 2*(length+width)
    return perimeter
}
console.log(perimeterOfRectangle(2,3))

function checkBMI(weight, height){
    let bmi = Math.floor(weight/(height*height))
    
    switch(true){
        case bmi < 18.5:
            console.log('Underweight')
            break;
        case 18.5 < bmi < 24.9:
            console.log(`Your BMI is ${bmi}. Normal weight`)
            break;
        case 25 < bmi < 29.9:
            console.log('Over weight')
            break;
        case bmi > 30:
            console.log('Obese')
            break;
    }
    
}
checkBMI(150, 1.6)

function findMax(num1,num2,num3){
    if (num1 > num2 && num1 > num3){
        console.log('Num1 is largest number')
    }else if (num2 > num1 && num2 > num3){
        console.log('Num2 is a largest number')
    }else{
        console.log('Num3 is largest number')
    }
}
findMax(9,12,-9)

function printArray(){
    for (let i=0; i < arguments.length;i++){
        console.log(`Number in array is: ${arguments[i]}`)
    }

}

function printArray2(arr){
    for (const i of arr){
        console.log(i)
    }
}
printArray(1,4,3,24)
printArray2([1,3,2,1])

function swapValue([a,b]){
    let arr = [b,a]
    console.log(arr)
}
swapValue([3,4])

function reverseArray(){
    let reverse_Array = []
    for (let i = 0; i< arguments.length; i++){
        reverse_Array.push(arguments[i])
    }
    console.log(reverse_Array.reverse())
}
reverseArray(1,2,3,4)

let item_array = []
function addItem(item){
    item_array.push(item)
    return item_array
}

function removeItem(index){
    item_array.splice(index,1)
    return item_array
}

addItem("hi")
addItem(2)
addItem(5)
addItem(6)
console.log("add item: ",item_array)
removeItem(0)
console.log("Remove one item :", item_array)
removeItem(2)
console.log("Remove one item :", item_array)

let sum = 0
function sumOfNumbers(...args){   
    for (const i of args){
        sum +=i    
    }
    return sum
}
sumOfNumbers(1,2,3,4,5)
console.log('Sum of numbers is: ',sum)

let sum_even = 0
function sumOfEven(...args){
    for (const i of args)
        if (i%2 == 0){
            sum_even += i
        }
    return sum_even
}
sumOfEven(1,2,3,4,5,6)
console.log('Sum of even number is: ',sum_even)

let even_arr = 0
let odd_arr = 0
function evenAndOdds(num){
    for (let i = 0; i <= num; i++){
        if (i%2 === 0){
            even_arr++
            
        }else{
            odd_arr++
        }
    }
}
evenAndOdds(100)
console.log(`The number of EVEN number is ${even_arr}\nThe number of ODD number is ${odd_arr}`)

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter number of characters per ID: ', (num_char) => {
  rl.question('Enter number of IDs to generate: ', (num_id) => {
    userIdGenerator(parseInt(num_char), parseInt(num_id));
    rl.close();
  })
})

const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
function userIdGenerator(num_char,num_id){
    for (let i = 0; i < num_id; i++){
        let id = ''
        for (let j = 0; j < num_char; j++){
            let random = Math.floor(Math.random()*char.length)
            id += char[random]
        }
        console.log(id)
    }

}