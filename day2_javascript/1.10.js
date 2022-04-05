//1.8
let text = '';
function draw(n) {
    let x = 2;
    for(i=1; i<=n;i++){
        for(j=1;j<=n;j++){
            text += i*j;
        }
       
        text += '\n';
    }
    
    console.log(text);
}
draw(2);