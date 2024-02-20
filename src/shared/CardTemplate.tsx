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
    <ul>
      {showStars ? (
        <li className="relative inline-block h-[480px] w-[350px] bg-black px-2">
          <div className="absolute z-30 flex flex-col  transition duration-500  whitespace-normal p-4 bg-white">
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
      ) : (
        <section className=" flex w-full h-full px-2 flex-wrap">
          <div className="  flex flex-col  transition  whitespace-normal p-4 bg-white   ">
            <div>
              <img src={img} alt="Before and after" className="rounded-lg" />
            </div>

            <p className="mt-5 text-normal">{description}</p>
            <h3>{name}</h3>
          </div>
        </section>
      )}
    </ul>
  );
};

export default CardTemplate;
