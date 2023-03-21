import { Link } from "react-router-dom";
import { AppBar } from "../Components/AppBar";

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
    <ul>
      {notepadList.map((currentItem) => (
        <li key={currentItem.id}>
          <h1 className="text-xl font-serif font-bold">{currentItem.title}</h1>
          <p className="font-serif">{currentItem.subtitle}</p>
        </li>
      ))}
    </ul>
  );
}
