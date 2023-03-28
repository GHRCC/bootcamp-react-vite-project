import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateNotepad } from "./Pages/CreateNotepad";
import { Layout } from "./Components/Layout";
import Home from "./Pages/Home";
import { NotepadId } from "./Pages/Notepad";
import { EditNotepad } from "./Pages/EditNotepad";

export function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notepads/:id" element={<NotepadId />} />
          <Route path="/create-notepad" element={<CreateNotepad />} />
          <Route path="/edit-notepad/:id" element={<EditNotepad />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
