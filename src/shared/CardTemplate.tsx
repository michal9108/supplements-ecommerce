import { StarIcons } from "./StarIcons";
import { CardTemplateTypes } from "./types";

const CardTemplate = ({
  title,
  name,
  description,
  country,
  showStars,
  img,
}: CardTemplateTypes) => {
  return (
    <ul className="pl-0">
    
    
        <li className="relative inline-block h-[500px] w-[350px] bg-black-900 ">
          <div className="absolute z-30 flex flex-col  transition duration-500  whitespace-normal  h-[500px] w-[350px] p-4 bg-white gap-3">
            <img src={img} alt="" />
            <p className="text-2xl italic">"{title}„</p>
            <p className="mt-5">"{description}„</p>
            <StarIcons />
            <span className="flex flex-row gap-1 ">
              <div className="flex items-center ">{name}</div>
              <div className="flex items-start my-auto p-2 max-w-fit max-h-fit border-solid border-green-500 bg-green-500 rounded-lg text-xs tracking-tight text-primary-100 text-center">
                ✅ verified Buyer
              </div>
            </span>

            <p>{country}</p>
          </div>
        </li>
    
    </ul>
  );
};

export default CardTemplate;
