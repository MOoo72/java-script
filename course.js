// A. Part 1: Coding Questions

// 1. Convert the string "123" to a number and add 7

console.log(+"123" + 7);

console.log("=======================================================");

// 2. Check if the given variable is falsy and return "Invalid" if it is • Input Example: 0 

const input_value = 0;
if(input_value === 0){
    console.log("Invalid");
};

console.log("=======================================================");

// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue

for(i = 1; i <= 10; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
};

console.log("=======================================================");

// 4. Create an array of numbers and return only the even numbers using filter method. • Input Example: [1, 2, 3, 4, 5]

const Numbers =[1,2,3,4,5]
const Result = Numbers.filter((element) =>{
    if(element % 2 === 0){
        console.log(element);
    };
});

console.log("=======================================================");

// 5. Use the spread operator to merge two arrays, then return the merged array. • Input Example: [1, 2, 3], [4, 5, 6]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged_array =[...arr1, ...arr2];
console.log(merged_array);

console.log("=======================================================");

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday).

const day = 2;

switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;  
    case 3:
        console.log("Tuesday");
        break;
    default:
        console.log(Invalid);           
}
console.log("=======================================================");

// 7. Create an array of strings and return their lengths using map method • Input: ["a", "ab", "abc"]

let arr_str =["a", "ab", "abc"];
let len_elements = arr_str.map((element) =>{
    console.log(element.length);
})

console.log("=======================================================");

// 8. Write a function that checks if a number is divisible by 3 and 5. • Input Example: 15

function check_num (num){
    if (num % 3 === 0 && num % 5 === 0){
        console.log("Divisible by both");
    };
}
check_num(15);

console.log("=======================================================");

// 9. Write a function using arrow syntax to return the square of a number • Input Example: 5
const squ_num = (num) =>{
    console.log(num ** 2);
}
squ_num(5);

console.log("=======================================================");
// 10. Write a function that destructures an object to extract values and returns a formatted string.
// • Input Example: const person = {name: 'John', age: 25}

const person = {name: 'John', age: 25}

function Data ({name,age}){

    console.log(`John is 25 years old`);
}
Data(person);

console.log("=======================================================");
//11. Write a function that accepts multiple parameters (two or more) and returns their sum.• Input Example: 1, 2, 3, 4, 5
function Sum (...Numbers){
    let Total = 0;
    for(const num of Numbers){
        Total+= num;
    }
    return Total;
}
console.log(Sum(1,2,3,4,5));

console.log("=======================================================");
// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
function write_message (){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Success");
        },3000);
    })
}
write_message().then((result) =>{
    console.log(result);
})

console.log("=======================================================");
//13. Write a function to find the largest number in an array. • Input Example: [1, 3, 7, 2, 4]
let new_array = [1,3,7,2,4]
function find_large_number () {
    return Math.max(...new_array);
}
console.log(find_large_number());

console.log("=======================================================");

// 14. Write a function that takes an object and returns an array containing only its keys.
//• Input Example: name: "John", age: 30}
const User = {name: 'John', age: 30}

function Informations (User) {
    return Object.keys(User)

}

console.log(Informations(User));

console.log("=======================================================");

// 15. Write a function that splits a string into an array of words based on spaces.
// • Input: "The quick brown fox"
let Text = "The quick brown fox"
function split_text (Text){
    return Text.split(" ")
}
console.log(split_text(Text));

console.log("======================================================================================================");


/*
==================================================
B. Part 2: Essay Questions
==================================================

1) forEach vs for...of

forEach:
- Array method.
- Runs a callback for each element.
- Good for simple operations on array values.

for...of:
- Loops directly over values.
- Gives more control.
- Can use break and continue.

--------------------------------------------------

2) Hoisting and TDZ

Hoisting:
- Function declarations can be called before declaration.
- var before assignment returns undefined.

TDZ:
- Applies to let and const before declaration.
- Accessing them before declaration gives ReferenceError.

--------------------------------------------------

3) == vs ===

==  : compares values and may convert types.
=== : compares value and type without conversion.

Example:
"1" == 1   => true
"1" === 1  => false

--------------------------------------------------

4) try...catch

try:
- Contains the code to execute.

catch:
- Handles errors.

With async/await, try...catch helps handle rejected
promises and async errors.

--------------------------------------------------

5) Type Conversion vs Type Coercion

Type Conversion:
- Manual conversion by the programmer.
Example:
+"123" => 123

Type Coercion:
- Automatic conversion by JavaScript.
Example:
"123" - 7 => 116

==================================================
*/
