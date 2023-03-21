import { Link } from "react-router-dom";
import { AppBar } from "../Components/AppBar";
import { TfiPencil } from "react-icons/tfi";

const notepadList = [
  {
    id: 1,
    title: "Title",
    subtitle: "Subtitle",
  },
  {
    id: 2,
    title: "Title",
    subtitle: "Subtitle",
  },
  {
    id: 3,
    title: "Title",
    subtitle: "Subtitle",
  },
  {
    id: 4,
    title: "Title",
    subtitle: "Subtitle",
  },
  {
    id: 5,
    title: "Title",
    subtitle: "Subtitle",
  },
  {
    id: 6,
    title: "Title",
    subtitle: "Subtitle",
  },
  {
    id: 7,
    title: "Title",
    subtitle: "Subtitle",
  },
];

export function NotepadList() {
  return (
    <ul className="bg-white flex flex-col gap-8 p-8 w-80 absolute top-16 right-0 bottom-0">
      {notepadList.map((currentItem) => (
        <li key={currentItem.id}>
          <h1 className="text-xl text-rosa-neon font-serif font-bold hover:text-2xl border-solid border-t-2 border-rosa-neon flex gap-2 items-center">
            {currentItem.title}
            <TfiPencil />
          </h1>
          <p className="font-serif text-pink-500">{currentItem.subtitle}</p>
        </li>
      ))}
    </ul>
  );
}
