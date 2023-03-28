import "../Pages/App.css";
//import { AppBar } from "../Components/AppBar";
import { NotepadList } from "../Components/NotepadList";
import toast from "react-simple-toasts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import { useParams } from "react-router-dom";
import api from "../APi/Api-index";
import { TextField } from "../Components/TextField";
import { TextArea } from "../Components/TextArea";

const initialCreateNotepad = {
  title: "",
  subtitle: "",
  content: "",
};

export function CreateNotepad() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialCreateNotepad); //creating the initial state of the notepad

  return (
    <div>
      <h1>Create Notepad</h1>
      <form
        className="flex flex-col"
        noValidate
        onSubmit={async (event) => {
          event.preventDefault();
          console.log(form);
          const response = await api.post("/notepads", form);
          if (response.data.success) {
            toast("Success!");
          } else {
            toast("Failed to create a new notepad");
          }
        }}
      >
        <TextField
          value={form.title}
          placeholder={"Write your title here"}
          onChange={(title) => setForm({ ...form, title })} //Here I am harnessing title -> value and executing a onchange function that will update the value every time that value is altered
        ></TextField>
        <TextField
          value={form.subtitle}
          placeholder={"Write your subtitle here"}
          onChange={(subtitle) => setForm({ ...form, subtitle })} //Here I am harnessing title -> value and executing a onchange function that will update the value every time that value is altered
        ></TextField>
        <TextArea
          className="resize-none"
          value={form.content}
          placeholder="What's on your mind!?"
          onChange={(content) => setForm({ ...form, content })}
        />
        <button type="submit">Submit</button>
      </form>
      <NotepadList />
    </div>
  );
}
