
function draw(n) {
    let text = '';
    for(i=1; i<=n; i++){
        for(j=1; j<=n; j++){
            if(i>=j){
                text += '*';
            }  else {
                text += '_';
            }
        }
        text += '\n';
    }
    //แยก 2 บรรทัดล่างออกเพื่อสร้าง condition ใหม่
    for(i=n-1; i>=1; i--){
        for(j=1; j<=n; j++){
            if(i<j){
                text += '_';
            }else {
                text += '*';
            }
        }
        text += '\n';
    }
    console.log(text);
}

draw(4);