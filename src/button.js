import { useState } from 'react';
import "./button.css"
function ButtonIncrement(props) {
  
   return (
       <div>
     <button  onClick={props.onClickFunc}>+</button>
     </div>
   )
}
function ButtonDecrement(props) {
  
  return (
    <div >
    <button  onClick={props.onClickFunc}>
    -
    </button>
    </div>
  )
}

function Display(props) {
  return (
    <p>{props.message}</p>
  )
}
function Appa() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if(counter<=0) {
    decrementCounter = () => setCounter(0);
  }
  return (
      <div>
    <div class = "bgn"> 
      <ButtonIncrement onClickFunc={incrementCounter}/>
      </div>

      <Display message={counter}/> 
      
      <ButtonDecrement onClickFunc={decrementCounter}/>
      </div>
  );
}
export default Appa;