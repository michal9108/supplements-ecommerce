import { Link } from "react-router-dom";

export default function CancelPage() {
  return (
    <div className="mt-20">
      <h2>Transaction has been cancelled! Please try again</h2>
     
      <Link to="/">
        <button type="button"> Continue shopping</button>
      </Link>
    </div>
  );
}

