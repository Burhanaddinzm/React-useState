import { useState } from "react";

function App() {
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(25);

  const handeClick = () => {
    if (name === "Mario") {
      setName("Luigi");
      setAge(30);
    } else {
      setName("Mario");
      setAge(25); 
    }
  };
  return (
    <>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handeClick}>Click me</button>
    </>
  );
}

export default App;
