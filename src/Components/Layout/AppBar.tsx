import { Link } from "react-router-dom";
import { SiNotepadplusplus } from "react-icons/si";

export function AppBar() {
  return (
    <div className="bg-white h-20 flex items-center px-8">
      <div className="flex items-center gap-2 bg-white">
        <Link to="/" className="group">
          <SiNotepadplusplus
            size="70px"
            className="text-black group-hover:scale-110 bg-white"
          />
        </Link>
        <Link
          to="/"
          className="text-black font-semibold font-serif text-xl hover:text-2xl border-b-2 border-black bg-white"
        >
          Notepads
        </Link>
      </div>
    </div>
  );
}
