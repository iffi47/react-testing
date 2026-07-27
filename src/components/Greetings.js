import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangeText] = useState(false);
  const handleChangeText= () => {
    setChangeText((prev) => {
      return prev =!prev
    })
  }
  return(
    <>
    <div>
      <h2>Hello World!</h2>
      {!changedText &&<Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={handleChangeText}>Change Text!</button>
      </div>
    </>
  )
};


export default Greeting;