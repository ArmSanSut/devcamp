function draw(n){
    let x = 1;
    let text = '';
    for(i=1; i<=n; i++){
        for(j=1; j<=(2*n)-1; j++){
            if(j>=n-(i-1) && j<=n+(i-1)){
                text += x;
                x++;
            } else {
                text += '-';
            }
        }
        text += '\n';
    }
    for(i=n-1; i>=1; i--){
        for(j=1; j<=(2*n)-1; j++){
            if(j>=n-(i-1) && j<=n+(i-1)){
                text += x;
                x++;
            } else {
                text += '-';
            }
        }
        text += '\n';
    }
    console.log(text);
}
draw(2);
draw(3);
draw(4);