
function draw(n) {
    let text = '';
    for(i=n-1; i>=0; i--){
        for(j=0; j<n; j++){
            if(i<=j){
                text += '*';
            }  else {
                text += '_';
            }
        }
        text += '\n';
    }
    //แยก 2 บรรทัดล่างออกเพื่อสร้าง condition ใหม่
    for(i=n-2; i<n; i++){
        for(j=0; j<n; j++){
            if(j>=i){
                text += '*';
            }else {
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