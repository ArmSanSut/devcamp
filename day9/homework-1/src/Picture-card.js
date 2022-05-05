import './App.css';
const PictureCard = (props) =>{
    return (
    <div className="container">
        <div className='img-item' style={{padding: "10px"}}>
            <img src={props.imgSrc} alt = "display-img"/>
        </div>
        <div className='data-item'>
            <p>DATA ID : {props.id}</p>
            <p>CREATED BY : {props.createdBy}</p>
            <p>LIKES : {props.like}</p>
            <p>COMMENTS : {props.comment}</p>
        </div>
        
    </div>
        
    )
        ;
}
export default PictureCard;