let text = '';
function draw(n) {
    let z = 1;
    for(i=1; i<n;i++){
        
        for(j=1; j<=n; j++){
            text += z;
            z++;  
        }
        text += '\n';
        
    }
    
    console.log(text);
}
draw(4);