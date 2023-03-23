import { AppBar } from "../Components/AppBar";
import { NotepadList } from "../Components/NotepadList";
import { useParams } from "react-router-dom";
import api from "../APi/Api-index";
import { useEffect, useState } from "react";
import { Notepad } from "../Types/notepad";

export function NotepadId() {
  const [notepad, setNotepad] = useState<Notepad>();
  async function fetchNotepad() {
    const res = await api(`/notepads/${id}`);
    const data = await res.data;
    setNotepad(data);
  }

  useEffect(() => {
    fetchNotepad();
  }, []);

  const { id } = useParams();
  return (
    <div>
      <AppBar />
      <NotepadList />
      <p>{id}</p>
      <p>{notepad?.title}</p>
      <p>{notepad?.subtitle}</p>
      <p>{notepad?.content}</p>
    </div>
  );
}
