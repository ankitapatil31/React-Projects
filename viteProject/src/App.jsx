
import { useState } from "react"
function App() {
  //let counter = 10
  //useState function return array["variable name","function"]
  let [counter, setCounter] = useState(15)
  const addCounter = () =>{
    // counter = counter+1
    // console.log("counter value", counter)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
  }
  const removeCounter = () =>{
    counter = counter-1
    console.log("counter value", counter)
    setCounter(counter)
  }
  return (
    <>
      <h1>Hello with vite project</h1>
      <h3>Counter Value {counter}</h3>
      <button onClick={addCounter}>Add</button>
      <button onClick={removeCounter}>Remove</button>
    </>
 
  )
}

export default App
