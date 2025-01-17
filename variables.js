/* 
    ? Variables
    * containers that store data in memory
    * declaration
        * allows memory space to be reserved by using an identifier
        * starts with let, var, or const keyword
        * cannot start with a number of character other than $ or _
        * if no value is assigned, it's undefined
    * initilization
        * assignment of data value
        * can be any value or data type (str, int, arr, fx, class, etc.)
        * can be reassigned (except for const)
*/

// Variable Declaration
let firstName
console.log(firstName)

// Reassignment
firstName = "Corey"
console.log(firstName)


// Variable Declaration and Initialization
let address = "123 Main St"


/* 
    ! Mini Challenge
    * create a variable called greet
    * string inerpolate or concatenate above so that it says:
    * Hi, I'm Corey and I live at 124 Main st
*/

let greet = `Hi, im ${firstName} and i live at ${address}`
let greet2 = "Hi, im" + firstName + "and i live" + address
console.log(greet)

// (a)  (b) (c)        (d)
let mailAddress = "123 Main St, Salem, MA";
// (e)  =       (f)

/*

    * a - keyword
    * b - variable identifier
    * c - assignment operator
    * d - value or initializer
    * e - variable declaration
    * f - variable initilization or value assignment
*/

/* 
    ? Coding Practices for Variables
    * be concise (ex: firstName instead of usersFirstBornBlondHairedName)
    * be specific (ex: item instead of i)
    * utilize camelCase (most popular in JS)
    * snake_case
    * PascalCase
    * skewer-case
    * nocase
    * SCREAMING_CASE (used for env variables etc.)
*/

// ? Var is hoisted whereas let is not

var age = 27
console.log(age)

// ? Const variable
const ssn = 666010101
console.log(ssn)
// ssn = 666000001 // TypeError can't reassign const values
// console.log(ssn)

/* 
    ! Challenge
    * set variables of fName, lName, houseNumber, aptNum (if applicable)
    * street, city, state, post code
    * Concatenate or interpolate them together into a variable called addressStamp
    * console log it
    ! Spicey Mode
    * assign the state value to be lowercase, but when you console log, it should capitalize the state
*/


let fName = 'Rude'
let lName = 'Bwoii'
const houseNumber = 123 
const stname = 'high st'
const st = 'MA'
const post = 3323

let addressStampp = `$Hi im ${fName}${lName} , i live at ${houseNumber} \n , my street address is  ${stname} , ${st} , ${post}`
console.log(addressStampp);


