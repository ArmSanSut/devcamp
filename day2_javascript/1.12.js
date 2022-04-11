let text = '';
function draw(n) {
    for (i=n-1; i>=0; i--){
        for (j=0; j<n; j++){
            if(i==j) {
                text += '_';
            } else {
                text += '*';
            }
            
        }
       
       text += '\n';
        
    }
    console.log(text);
}
draw(2);
draw(3);
draw(4);