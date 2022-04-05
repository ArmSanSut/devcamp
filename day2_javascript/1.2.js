//1.2
let text = '';
function draw(n) {
    for(i=0; i<n;i++){
        for(j=0; j<n; j++){
            text += '*';
        }
    text += '\n';
    }
    console.log(text);
}
draw(3);