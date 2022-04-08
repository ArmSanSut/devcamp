let text = '';
function draw(n) {
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(i==j || i>=j){
                text += '*';
            } else {
                text += '_';
            }
        }
        text += '\n';
    }
    console.log(text);
}
draw(2);
draw(3);
draw(4);