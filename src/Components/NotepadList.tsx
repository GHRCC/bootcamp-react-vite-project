import { Link } from "react-router-dom";
import { AppBar } from "../Components/AppBar";
import { TfiPencil } from "react-icons/tfi";
import api from "../APi/Api-index";
import { useEffect, useState } from "react";
import { Notepad } from "../Types/notepad";

export function NotepadList() {
  const [notepads, setNotepads] = useState<Notepad[]>([]);

  const fetchNotepad = async () => {
    const res = await api("/notepads");
    const data = await res.data;
    setNotepads(data);
  };

  useEffect(() => {
    fetchNotepad();
  }, []);

  return (
    <ul className="bg-white flex flex-col gap-8 p-8 w-80 absolute top-16 right-0 bottom-0 shadow-lg">
      {notepads.map((currentItem: Notepad) => (
        <li key={currentItem.id}>
          <Link to={`/notepads/${currentItem.id}`}>
            <h1 className="text-xl text-rosa-neon font-serif font-bold hover:text-2xl border-solid border-t-2 border-rosa-neon flex gap-2 items-center">
              {currentItem.title}
              <TfiPencil />
            </h1>
          </Link>
          <p className="font-serif text-pink-500">{currentItem.subtitle}</p>
        </li>
      ))}
    </ul>
  );
}
