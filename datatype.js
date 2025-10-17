const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
for (let i = 0; i <= 10; i++){
    console.log(i)
}
for (let i = 10; i >= 0; i--){
    console.log(i)
}

let i = 10
while (i > 0){
    console.log(i)
    i--
}

let j = 10
do{
    console.log(j)
    j--
} while (j >= 0) 

for (let i=0; i<=7; i++){
    console.log
}
let row = 5
for (let i = 0; i <= row; i++){
    let pattern = ''
    for (let j = 0; j <= i; j++){
        pattern += '*'    
    }
    console.log(pattern)
}
for (let i = 1; i <= row; i++){
    let space = ' '.repeat(row-i)

    let pattern = '*'.repeat(i)
    console.log(space+pattern)
}
for (let i = 0; i <= 10; i++){
    
    console.log(`${i} X ${i} = ${i*i}`)
    
}
console.log(`i\ti^2\ti^3\n`)
for (let i = 0; i<=10;i++){
    console.log(`${i}\t${i*i}\t${i*i*i}\n`)
}
console.log('Print even number: ')
let sum_Even = 0
let sum_Odd = 0
for (let i = 0; i<=20; i++){
    if (i % 2 == 0){
        console.log(i)
        sum_Even += i
    }
}

console.log('Print odd number: ')
for (let j = 0; j <= 20; j++)
    if (j % 2 == 1){
        console.log(j)
        sum_Odd += j
}
console.log('Sum of all number: ')
let sum = 0
    for (let i = 0; i<=10; i++){
        sum += i        
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`)
console.log(`The sum of all evens from 0 to 20 is ${sum_Even}`)
console.log(`The sum of all odd from 0 to 20 is ${sum_Odd}`)

let arr = []
arr.push(sum_Even,sum_Odd)
console.log(arr)
console.log('Develop a small script which generate array of 5 random numbers')
const arr_Random = []
for (let i = 0; i < 5; i++){
    arr_Random.push(Math.floor(Math.random(i)*100))
    
}
console.log (arr_Random)
console.log('Develop a small script which generate array of 5 random numbers and the numbers must be unique')

const uniq_Random = []
for (let i = 0; i < 5; i++){
    let uniq_Num = Math.floor(Math.random(i)*100)
    if(!uniq_Random.includes(uniq_Num))
        uniq_Random.push(uniq_Num)
}
console.log(uniq_Random)

console.log('Develop a small script which generate a six characters random id:')

const arr_Char = []

const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
for (let i = 0; i < 6; i++){
    let id = Math.floor(Math.random(i) * char.length)
    arr_Char.push(char[id])
}
console.log(arr_Char.join(''))

console.log('Develop a small script which generate any number of characters random id:')
const arr_Random_Char = []
for (i in char){
let id = Math.floor(Math.random(char)*char.length)
arr_Random_Char.push(char[id])
}
console.log(arr_Random_Char.join(''))


