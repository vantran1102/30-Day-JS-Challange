const arr = []
const arr1 = [1,2,3,4,5]
console.log(arr1.length)
let middle
if (arr1.length/2 !== 0){
    middle = Math.floor(arr1.length/2)
    } 
    else {
    middle = arr1.length/2
}

console.log(arr1[0],arr1[arr1.length-1],middle)
const mixedDataTypes = ['Java', 'Python', 1, 3, 5]
console.log(mixedDataTypes.length)

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)

let middleComp
if (itCompanies.length/2 !== 0){
    middleComp = Math.floor(itCompanies.length/2)
}
else{
    middleComp = itCompanies.length/2
}
console.log(itCompanies[0], itCompanies[itCompanies.length-1], itCompanies[middleComp])
console.log(itCompanies.toString())
upperCaseComp = itCompanies.toString().toUpperCase()
console.log(upperCaseComp)
console.log(itCompanies.join(', ')+ 'are big IT Company')

let comp = prompt ('Enter Company Name: ')

if (itCompanies.includes(comp)  ){
    console.log('Company name is exist in the array')
}
    else{
    console.log("Company name is not exist") 
}
const compArr = []
for (let comp of itCompanies){
    comp = comp.toLowerCase()
    comp.split('').sort().join('')
    if (comp.includes('oo'))
       compArr.push(comp) 
}

console.log(compArr)

console.log(itCompanies.reverse())
console.log(itCompanies)
console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(itCompanies.length - 3,itCompanies.length))

console.log(itCompanies.shift())
console.log(itCompanies.shift(middleComp))
console.log(itCompanies.pop())
console.log(itCompanies.splice())