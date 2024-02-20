import { H2Types } from "@/shared/types";
const H2: React.FC<H2Types> = ({ children, color }) => {
  return (
    <h2
      className={`xss:text-3xl xs:text-4xl font-black py-10 uppercase text-${color} text-center`}
    >
      {children}
    </h2>
  );
};

export default H2;
