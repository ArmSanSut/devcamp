import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, setDefault } from './calculateReducer';
import { sale, programmer, setBack } from './workExperience';

function App() {
  // Get ค่า State
  const count = useSelector(state => state.counter)
  const show = useSelector(state => state.position)
  // ใช้เรียก Actions
  const dispatch = useDispatch()

  return (
    <>
      <h1>{count.salary}</h1>
      <h1>{show.department}</h1>
      {/* salary */}
      <input type='button' value="Increase Salary" onClick={() => dispatch(increment())} />
      <input type='button' value="Decrease Salary" onClick={() => dispatch(decrement())} />
      <input type='button' value="Default Salary" onClick={() => dispatch(setDefault())} /> <br /> <br />
      
      {/* working Experience */}
      <input type='button' value="Sale DPT" onClick={() => dispatch(sale())} />
      <input type='button' value="Programmer DPT" onClick={() => dispatch(programmer())} />
      <input type='button' value="Default DPT" onClick={() => dispatch(setBack())} />
     
    </>
  );
}



export default App;
