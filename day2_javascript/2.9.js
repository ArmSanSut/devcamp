function draw(n){
    let text = '';
    for(i=1; i<=n; i++){
        for(j=1; j<=(2*n)-1; j++){
            if(j>=n-(i-1) && j<=n+(i-1)){
                text += '*';
            } else {
                text += '_';
            }
        }
        text += '\n';
    }
    console.log(text);
}
draw(3);