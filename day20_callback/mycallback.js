
let fruits = ["apple", "banana", "roseapple"]

function addFruits(fruit, callback) {
    setTimeout(function () {
        fruits.push(fruit);
        console.log(`add ${fruit} Success`)
        callback()
    }, 500)
}
//define getfruits() as anonymous
addFruits("pineapple",function() {
    setTimeout(function () {
        console.log(fruits)
    }, 200)
})

//define getfruits() as normal
let fruits2 = ["apple", "banana", "mango"]

function addFruits(fruit, callback) {
    setTimeout(function () {
        fruits2.push(fruit);
        console.log(`add ${fruit} Success`)
        callback()
    }, 500)
}

function getFruits() {
    setTimeout(function () {
        console.log(fruits2)
    }, 200)
}

addFruits("pineapple", getFruits)
