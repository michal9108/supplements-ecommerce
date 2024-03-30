import BodyBuffLogo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img src={BodyBuffLogo} className="w-14"></img>
    </Link>
  );
}
