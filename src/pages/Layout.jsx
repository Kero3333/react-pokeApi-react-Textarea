import { Link } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="content">
      <Link to={"/pokemon"}>Pokemon</Link>
      <Link to={"/textarea"}>Textarea</Link>
    </div>
  );
};
