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
      <NotepadList />
      <div className="flex flex-col items-center bg-white text-black my-5 md:mx-auto md:max-w-screen-md h-36 border-double border-black border-4">
        <p className="bg-white">#{id}</p>
        <p className="bg-white text-2xl font-extrabold">{notepad?.title}</p>
        <p className="bg-white">{notepad?.subtitle}</p>
        <p className="bg-white">{notepad?.content}</p>
      </div>
    </div>
  );
}
