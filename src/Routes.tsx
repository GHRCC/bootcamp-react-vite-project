import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateNotepad } from "./Components/CreateNotepad";
import { Layout } from "./Components/Layout";
import Home from "./Pages/Home";
import { NotepadId } from "./Pages/Notepad";

export function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notepads/:id" element={<NotepadId />} />
          <Route path="/create" element={<CreateNotepad />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
