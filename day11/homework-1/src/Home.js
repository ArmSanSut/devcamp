function Home() {
    console.log(plus(5,8));
    return (
        <div style={{backgroundColor: "lavender", textAlign: 'center'}}>
            <h1 style={{textAlign: 'center'}}>This is a HOMEPAGE</h1>
            <p>You all are welcome to explore my portfolio</p>
            <p>Each topic is located on the top of the website, you can click to explore</p>
            <img alt="home-img" src="https://picsum.photos/seed/picsum/600/300"/>
        </div>
    );
}
function plus(x,y) {
    let data = [x,y,x,y]
    return data;
}

export default Home;