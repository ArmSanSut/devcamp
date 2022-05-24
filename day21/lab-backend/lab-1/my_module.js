// let myVar = "Hello this is myVar";
// let myVar2 = {
//     myProperty : "hello",
//     myFunction : function () {
//         console.log('my function is here!');
//     }
// }

// module.exports.myVar = myVar;
// module.exports.myVar2 = myVar2;

module.exports = function (myVar) {
    return {
        func1(){
            console.log(myVar+': func1');
        },
        func2(){
            console.log(myVar+': func2');
        }
    }
 
}
