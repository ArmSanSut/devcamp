
function draw(n) {
    let x = 1;
    let text = '';
    
    for(i=1; i<=n; i++){
        for(j=1; j<=n; j++){
            if(i>=j){
                text += x;
                
            }  else {
                text += '-';
            }
        }
        x++;
        text += '\n';
    }
    //แยก 2 บรรทัดล่างออกเพื่อสร้าง condition ใหม่
    for(i=n-1; i>=1; i--){
        for(j=1; j<=n; j++){
            if(i>=j){
                text += x-2;
                
            }else {
                text += '-';
            }
        }
        x--;
        text += '\n';
    }
    console.log(text);
}
draw(2);
draw(3);
draw(4);