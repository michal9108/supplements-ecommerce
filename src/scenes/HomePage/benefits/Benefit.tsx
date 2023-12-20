import { SelectedPage } from "@/shared/types";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <div
      // variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center md:mt-2 md:px-2 md:py-10 "
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3  text-lg">{description}</p>
      
    </div>
  );
};

export default Benefit;
