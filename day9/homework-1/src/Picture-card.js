import './App.css';
import React, { useState } from 'react';

const PictureCard = (props) =>{
    const [like,setLike] = useState(props.like);
    const [comment,setComment] = useState(props.comment);

    const onClickFunc = (e) => {
        setLike(like+1);
    }
    const onKeyPressFunc = (e) =>{
        console.log("e.keyCode",e)
        if(e.which === 13) {
            alert(`Thank you for your like and comment`);
            e.target.value = "";
            setComment(comment+1);
        }
        
    }

    return (
    <div className="container">
        <div className='img-item' style={{padding: "10px"}}>
            <img src={props.imgSrc} alt = "display-img"/>
        </div>
        <div className='data-item'>
            <p>DATA ID : {props.id}</p>
            <p>CREATED BY : {props.createdBy}</p>
            <p>LIKES : {like}</p>
            <p>COMMENTS : {comment}</p>
        </div>
        <div className='add-like'>
            <input type="button" value="LIKE" onClick = {onClickFunc}></input>
            <input type="text" onKeyPress={onKeyPressFunc}></input>
        </div>
        
    </div>
        
    )
        ;
}
export default PictureCard;