import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SiNotepadplusplus } from "react-icons/si";
import { Link } from "react-router-dom";
import { AppBar } from "../Components/AppBar";
import { NotepadList } from "../Components/NotepadList";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <AppBar />
      <NotepadList />
    </div>
  );
}

export default Home;
