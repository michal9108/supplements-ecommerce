import { Link } from "react-router-dom";
import { ButtonlinkTypes } from "./types";

export default function ButtonLink({to, children, className, onClick}:ButtonlinkTypes) {
  return <Link to={to}><button className={className} onClick={onClick}>{children}</button></Link>
}
