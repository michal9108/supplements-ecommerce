import { Link } from "react-router-dom";
import { ButtonBuyLinkTypes, ProductType } from "./types";

export default function ButtonBuyLink({
  to,
  children,
  className,
  onClick,
  disabled,
  
}: ButtonBuyLinkTypes) {
  // <-- Add product type here

  return (
    <Link to={to} >
      <button className={className} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </Link>
  );
}
