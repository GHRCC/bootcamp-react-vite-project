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
    <div className="flex flex-col bg-white justify-center items-center my-20 p-16 w-full gap-5">
      <Breadcrumbs
        links={[
          {
            title: "Home",
            link: "/",
          },
          { title: notepad.title, link: `/notepads/${params.id}` },
        ]}
      />
      <h1 className="text-2xl">Edit Notepad</h1>
      <div className="flex flex-col items-center bg-white text-black h-56 border-double  w-full gap-3">
        <form
          className="flex flex-col gap-3"
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
            className="border-2 border-double border-black w-96"
            value={form.title}
            placeholder={"Write your title here"}
            onChange={(title) => setForm({ ...form, title })} //Here I am harnessing title -> value and executing a onchange function that will update the value every time that value is altered
          ></TextField>
          <TextField
            className="border-2 border-double border-black w-96"
            value={form.subtitle}
            placeholder={"Write your subtitle here"}
            onChange={(subtitle) => setForm({ ...form, subtitle })} //Here I am harnessing title -> value and executing a onchange function that will update the value every time that value is altered
          ></TextField>
          <TextArea
            className="resize-none border-2 border-double border-black"
            value={form.content}
            placeholder="What's on your mind!?"
            onChange={(content) => setForm({ ...form, content })}
          />
          <div className="flex justify-evenly items-center">
            <button
              className="border-double border-2 border-black w-16 hover:bg-emerald-400"
              type="submit"
            >
              Edit
            </button>
            <button
              className="border-double border-2 border-black w-16 hover:bg-red-600"
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
          </div>
        </form>
      </div>
    </div>
  );
}
