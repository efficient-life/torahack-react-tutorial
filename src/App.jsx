import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import ToggleButton from "./components/ToggleButton";
import TextInput from "./components/TextInput";
import { useEffect, useState } from "react";

function App() {
  // const [name, setName] = useState("");
  // const [id, setId] = useState("efficient-life");
  // const ids = ["efficient-life", "aws", "google", "facebook"];
  // const getRandomID = () => {
  //   const _id = ids[Math.floor(Math.random() * ids.length)];
  //   setId(_id);
  // };
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${id}`);
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setName(data.name);
  //     })
  //     .catch((error) => {
  //       console.log("error");
  //     });
  // }, [id]);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <TextInput />
      <ToggleButton />
      <Counter />
    </div>
  );
}

export default App;
