import { Link } from "react-router-dom";

type LinkButtonProps = {
  to: string;
  children: string;
};

export function LinkButton(props: LinkButtonProps) {
  return (
    <Link
      to={props.to}
      className="hover:bg-black hover:text-white text-black py-2 px-3 uppercase font-bold text-sm shadow-lg border-double border-4 border-black"
    >
      {props.children}
    </Link>
  );
}
