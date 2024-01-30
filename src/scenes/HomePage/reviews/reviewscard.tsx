
import { StarIcon } from "@heroicons/react/24/solid";
type Props = {
  title: string;
  description?: string;
  name: string;
  state: string;
};

const Rewiewscard = ({ title, name, description, state }: Props) => {
//   const overlayStyles = `p-5 absolute z-30 flex
//     h-[500x] w-[450px] flex-col 
//     whitespace-normal bg-primary-500 text-center 
//     opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative  inline-block h-[480px] w-[350px] bg-black px-2">
      <div className="absolute z-30 flex flex-col  transition duration-500  whitespace-normal p-4 bg-white">
        <p className="text-2xl">{title}</p>
        <p className="mt-5">{description}</p>
        <div className="flex items-center my-4 text-yellow-300 ">
                    <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
                    <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
                    <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
                    <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
                    <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
                  </div>
        <p>{name}</p>
        <p>{state}</p>
      </div>
     
    </li>
  );
};

export default Rewiewscard;
