//Selection sort
const arr = [3,44,38,5,47,15,36,27,2,46,4,19,50,48];

for(j=0;j<arr.length;j++) {
    let minIndex = j;
    for(i=j+1; i<arr.length; i++ ){
        if(arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }
    [arr[minIndex], arr[j]] = [arr[j], arr[minIndex]];
}
console.log(arr);

//Fibonacci 
function Fibonacci(num) {
    if (num <= 1) return 1;
    return Fibonacci(num-1) + Fibonacci(num-2);
}
console.log('Fibonacci :');
console.log(Fibonacci(5));