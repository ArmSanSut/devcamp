function FooterComponent (){
    let min = 1;
    let max = 100;
    let rand = min + Math.random() * (max - min);

    return (
        <div style={{height: 250, backgroundColor: "yellow",textAlign: "center", position: "relative"}}>
            <h1>This is FOOTER and Random Number is : {rand} </h1>
        </div>
    );
}
export default FooterComponent;