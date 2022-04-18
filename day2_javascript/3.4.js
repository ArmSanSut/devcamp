function draw(n) {
    let arr=[];
    for (let i=1; i<=n; i++){
        let text = [];
        for (let j=1; j<=(2*n)-1; j++){
            if(j>=n-(i-1) && j<=n+(i-1)) {
                text.push('*');
            } else {
                text.push('_');
            }
        }
        arr.push(text);
    }
    for(let i=n-1; i>=1; i--){
        let text = [];
        for(let j=1;  j<=(2*n)-1; j++){
            if(j>=n-(i-1) && j<=n+(i-1)){
                text.push('*');
            } else {
                text.push('_');
            }
        }
        arr.push(text);
    }
    console.log(arr);
}
draw(2);
draw(3);
draw(4);