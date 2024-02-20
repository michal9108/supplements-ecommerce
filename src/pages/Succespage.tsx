import { Link } from "react-router-dom";

const SuccesPage = () => {
  return (
    <div className="mt-20">
      <h2>Thank you for your order!</h2>
      <p>Check Your emaik inbox for the receipt.</p>
      <p>
        If you have any question don;t hasitate to use chat in right- bottom
        corner or email to{" "}
        <a href="support@bodybuff.com">support@bodybuff.com</a>
      </p>
      <Link to="/">
        <button type="button"> Continue shopping</button>
      </Link>
    </div>
  );
};

export default SuccesPage;
