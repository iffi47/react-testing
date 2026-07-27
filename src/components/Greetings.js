import { useState } from "react";

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
      {!changedText &&<p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={handleChangeText}>Change Text!</button>
      </div>
    </>
  )
};


export default Greeting;