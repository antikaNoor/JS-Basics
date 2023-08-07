// variables

// works
// var x = 9
// var x = 10

// let x = 9
// x = 10

// does not work
// let x = 9
// let x = 10

// const x = 9
// x = 10


//object
const carArray = [
    {
        id: 1,
        color: 'Red',
        model: 'ABCD',
        seatNumber: 2,
        isConditionOk: true
    },
    {
        id: 2,
        color: 'Blue',
        model: 'ABCDE',
        wheels: 4,
        isConditionOk: false
    }
]

carArray.push({
    id: 3,
    color: 'Purple'
})

// console.log("The color of the car", carArray[0].id, "is: ", carArray[0].color,
//             ", color of car", carArray[2].id, "is: ", carArray[2].color)

//calling a function before declaring it
console.log("Hoisting example: ", firstFunction(2, 3))
//one way to declare function
function firstFunction(x, y) {
    return x + y
}

//another way to declare function (anonymous function)
const anonymousFunction = function(a, b) {
    return a-b
}

//Arrow function
const arrowFunction = (x, y) => x * y

const sum = firstFunction(2, 9)
console.log("The addtion is: ", sum)

const sub = anonymousFunction(4, 1)
console.log("The subtraction is: ", sub)

const mul = arrowFunction(2, 3)
console.log("The multiplication is: ", mul)
