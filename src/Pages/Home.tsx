import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="bg-red-500 text-pink-700">Hello</h1>
    </div>
  );
}

export default Home;
