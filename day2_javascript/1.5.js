//1.5
let text = '';
function draw(n) {
    for(i=n; i>=1;i--){
       
        for(j=n; j>=1; j--){
            
            text += i;
        }
    text += '\n';
    }
    console.log(text);
}
draw(4);