import { useNavigate } from "react-router-dom";
export default function Account() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="w-full h-screen bg-[#1a1a1a] text-white flex justify-center items-center">
      <h2 className="text-3xl">ACCOUNT</h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
