// 1. Create an array named numbers and store 5 number values in it
let numbers= [1,2,3,4,5]

// 2. Calculate the sum of array items and print it to the console using console.log()
let result=0
for (let i of numbers){
    result=result+i 
    
}
console.log (result)

/ 3. Calculate the average of array items and print it to the console using console.log()

let average=result/numbers.length
console.log (average)


// 4. Find the highest number in the array and print it to the console using console.log()
let temp
for (let i =0;i<numbers.length;i++){
    if (numbers[i]>numbers[i+1]) {
        temp=numbers[i]
        
    } 
    
}
console.log (temp)

// 5. Find the lowest number in the array and print it to the console using console.log()
let temp
for (let i =0;i<numbers.length;i++){
    if (numbers[i]<numbers[i+1]) {
        temp=numbers[i]
        
    } 
    
}
console.log (temp)

// 6. Find the even numbers in the array and print them to the console using console.log()

for (let temp of numbers) {
    if (temp%2==0) {
        console.log(temp)
        
  }



// 7. Find the odd numbers in the array and print them to the console using console.log()
for (let temp of numbers) {
    if (temp%3==0) {
        console.log(temp)
        
  }

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for (let temp of numbers) {
    if (temp%5==0) {
        console.log(temp)
        
  }
// 9. Log all the element of the array one by one

for (let temp of numbers) {
    console.log(temp)
  }

// 10. Find all the number in the array that is divisible by 3
