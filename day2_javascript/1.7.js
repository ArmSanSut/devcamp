let text = '';
function draw(n) {
    let z = n*n;
    for(i=n; i>=1;i--){
        
        for(j=n; j>=1; j--){
            text += z;
            z--;  
        }
        text += '\n';
        
    }
    
    console.log(text);
}
draw(2);