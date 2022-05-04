import './App.css';
function Card (){
    const items = [
        {
            img : "https://picsum.photos/200",
            date : "5",
            likes : "200",
            comments : "50"
        },
        {
            img : "https://picsum.photos/201",
            date : "6",
            likes : "213",
            comments : "46"
        },
        {
            img : "https://picsum.photos/202",
            date : "7",
            likes : "364",
            comments : "84"
        },
        {
            img : "https://picsum.photos/203",
            date : "8",
            likes : "156",
            comments : "16"
        },
    ] 
    const display = items.map((x, i, a) => {
        return (
            <div className="container" key = {`picture${i}`}>
                <div className='img-item' style={{padding: "10px"}}>
                    <img src= {x.img} alt = {x.name}/>
                </div>
                <div className='data-item'>
                    <div>
                        <p>Date is : {x.date}</p>
                    </div>
                    <div>
                        <p>Number of likes : {x.likes}</p>
                    </div>
                    <div>
                        <p>Number of Comments : {x.comments}</p>
                    </div>  
                </div>
                
            </div>
        );
    });
    return <div className='display-item'>{display}</div>;
}
export default Card;