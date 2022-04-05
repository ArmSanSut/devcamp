//1.8
let text = '';
function draw(n) {
    let x = 2;
    for(i=1; i<=n;i++){
        text += x;
        x = 2*x;
        text += '\n';
    }
    
    console.log(text);
}
draw(2);