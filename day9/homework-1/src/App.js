
import './App.css';
import PictureCard from './Picture-card';

function App() {
  let data =[
    {
      id : 1,
      imgScr : "https://picsum.photos/200",
      createdBy : "Tony",
      likeCount : 135,
      commentCount : 412
    },
    {
      id : 2,
      imgScr : "https://picsum.photos/201",
      createdBy : "Peter",
      likeCount : 195,
      commentCount : 569
    },
    {
      id : 3,
      imgScr : "https://picsum.photos/202",
      createdBy : "Brooklyn",
      likeCount : 1546,
      commentCount : 1254
    },
    {
      id : 4,
      imgScr : "https://picsum.photos/203",
      createdBy : "Jordan",
      likeCount : 265,
      commentCount : 3652
    }
  ] 
  
  return (
    <>
      {data.map( x => (
      <PictureCard 
        id={x.id} 
        imgSrc={x.imgScr}
        createdBy = {x.createdBy}
        like = {x.likeCount}
        comment = {x.commentCount}
      />
    ))}
    </>
  
    
  );
}

export default App;
