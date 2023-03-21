import { Link } from "react-router-dom";
import { SiNotepadplusplus } from "react-icons/si";

export function AppBar() {
  return (
    <div className="bg-teal-400 h-16 flex items-center px-8">
      <div className="flex items-center gap-2">
        <Link to="/" className="group">
          <SiNotepadplusplus
            size="70px"
            className="text-red-600 group-hover:scale-110"
          />
        </Link>
        <Link
          to="/"
          className="text-red-600 font-semibold font-serif text-xl hover:text-2xl border-b-2 border-red-600 "
        >
          Notepads
        </Link>
      </div>
    </div>
  );
}
