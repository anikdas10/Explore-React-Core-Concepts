
import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './users';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert("Button Clicked")
  }

  function handleClick2(){
    alert("Button Clicked 2")
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }
  return (
    <>
      <h3>React Core Concepts</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => addToFive(28)}>Click 3</button>

    </>
  )
}

export default App
