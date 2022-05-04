
function RandomBox (){
  let min = 200;
  let max = 500;
  let random = Math.floor(Math.random() * (max - min) + min); 
    console.log(random);
  let color = ['red', 'blue', 'green', 'purple', 'pink'];
  let randCol = color[Math.floor(Math.random() * color.length)];
  let min2 = 20;
  let max2 = 40;
  let randomFont = Math.floor(Math.random() * (max2 - 2) + min2); 
  return (
    <div style = {{height: random, width: random, backgroundColor: randCol, fontSize: randomFont, textAlign:"center"}}>Random Box</div>
  );
    

}
export default RandomBox;