
function draw (n) {  
    let arr = [];
    for(let i=0; i<n; i++){
        let text = [];
        for(let j=0; j<n; j++){
            if(i==j || i>=j) {
                text.push('*');
            } else {
                text.push('_');
            }
        }
        arr.push(text);
    }
    console.log(arr);
}
draw(2);
draw(3);
draw(4);