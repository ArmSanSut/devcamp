debugger;
let arr2 = [2,4,6,8,10];

function myFunc() {
    for (let i=0; i<2; i++) {
        console.log('Hello World');
    }
}
for (let i = 0; i < arr2.length; i++) {
    //debugger;
    console.log(arr2[i]);
    myFunc();
}




