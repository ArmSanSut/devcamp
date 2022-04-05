//1.8
let text = '';
function draw(n) {
    let x = 0;
    for(i=0; i<n;i++){
        text += x;
        x += 2;
        text += '\n';
    }
    
    console.log(text);
}
draw(2);