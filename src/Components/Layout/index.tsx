import { LinkButton } from "../LinkButton";
import { AppBar } from "./AppBar";
//import { LinkButton }

type layout = {
  children: React.ReactNode;
};

export function Layout(props: layout) {
  return (
    <>
      <div className="flex  bg-white shadow-md flex-grow-0">
        <div className="flex flex-1">
          <AppBar />
        </div>
        <div className="m-8">
          <LinkButton to="/create">Create Notepad</LinkButton>
        </div>
      </div>
      {props.children}
    </>
  );
}
