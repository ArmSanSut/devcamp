function draw(n) {
    let text = '';
    for(i=0; i<n; i++){
        for(j=n-1;j>=0;j--){
            if (j>=i){
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