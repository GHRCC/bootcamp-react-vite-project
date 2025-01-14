import { Link } from "react-router-dom";
import { AppBar } from "./Layout/AppBar";
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
    <ul className="bg-white flex flex-col gap-8 p-8 w-72 absolute top-26 right-0 bottom-auto shadow-lg border-double border-black border-4 overflow-auto h-screen">
      {notepads.map((currentItem: Notepad) => (
        <li key={currentItem.id} className="w-full">
          <div className="flex w-full border-solid border-t-2 border-black justify-between">
            <Link to={`/notepads/${currentItem.id}`}>
              <h1 className="text-lg text-black font-extrabold hover:text-xl  flex gap-2 items-center bg-white">
                {currentItem.title}
              </h1>
            </Link>
            <Link to={`/edit-notepad/${currentItem.id}`}>
              <TfiPencil className="bg-white" />
            </Link>
          </div>
          <p className="font-serif text-black bg-white">
            {currentItem.subtitle}
          </p>
        </li>
      ))}
    </ul>
  );
}
