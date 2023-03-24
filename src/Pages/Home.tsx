import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SiNotepadplusplus } from "react-icons/si";
import { Link } from "react-router-dom";
import { Layout } from "../Components/Layout/index";
import { NotepadList } from "../Components/NotepadList";
import { LinkButton } from "../Components/LinkButton";

function Home() {
  return (
    <div>
      <NotepadList />
    </div>
  );
}

export default Home;
