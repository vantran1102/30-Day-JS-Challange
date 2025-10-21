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