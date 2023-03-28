import "../Pages/App.css";
//import { AppBar } from "../Components/AppBar";
import { NotepadList } from "../Components/NotepadList";
import toast from "react-simple-toasts";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import api from "../APi/Api-index";
import { TextField } from "../Components/TextField";
import { TextArea } from "../Components/TextArea";
import { Breadcrumbs } from "../Components/Breadcrumbs";

const initialCreateNotepad = {
  title: "",
  subtitle: "",
  content: "",
};

export function EditNotepad() {
  const params = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialCreateNotepad); //creating the initial state of the notepad

  const [notepad, setNotepad] = useState(initialCreateNotepad);

  useEffect(() => {
    api.get(`/notepads/${params.id}`).then((results) => {
      setForm({
        title: results.data.title,
        subtitle: results.data.subtitle,
        content: results.data.content,
      });
      setNotepad(results.data);
    });
  }, []);

  return (
    <div className="flex">
      <h1>Edit Notepad</h1>
      <div className="flex flex-col items-center bg-white text-black my-5 md:mx-auto md:max-w-screen-md h-36 border-double border-black border-4 w-full gap-3">
        <Breadcrumbs
          links={[
            {
              title: "Home",
              link: "/",
            },
            { title: notepad.title, link: `/notepads/${params.id}` },
          ]}
        />
        <form
          className="flex flex-col"
          noValidate
          onSubmit={async (event) => {
            event.preventDefault();
            const response = await api.put(`/notepads/${params.id}`, form);
            if (response.data.success) {
              toast("Success!");
              navigate("/");
            } else {
              toast("Failed to edit the notepad");
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
            className="resize-none w-full"
            value={form.content}
            placeholder="What's on your mind!?"
            onChange={(content) => setForm({ ...form, content })}
          />
          <button type="submit">Edit</button>
          <button
            type="button"
            onClick={async () => {
              const res = await api.delete(`/notepads/${params.id}`);
              const deleteNotepadResponse = res.data;

              if (deleteNotepadResponse.success) {
                toast("Notepad deleted successfully!");
                navigate("/");
              } else {
                toast("Error: unable to delete notepad");
              }
            }}
          >
            Delete
          </button>
        </form>
        <NotepadList />
      </div>
    </div>
  );
}
