//1.2
let text = '';
function draw(n) {
    for(i=1; i<=n;i++){
       
        for(j=1; j<=n; j++){
            
            text += j;
        }
    text += '\n';
    }
    console.log(text);
}
draw(2);
draw(3);
draw(4);