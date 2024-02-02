import { BenefitType } from "@/shared/types";


const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};



const Benefit = ({ icon, title }: BenefitType) => {
  return (
    <div
      className=" flex flex-col  flex-wrap gap-2 items-center justify-center rounded-md  text-center px-2 py-2  m-6
      //  md:px-2 md:py-5 
       border-box "
    >
      <div className="mx-auto px-auto flex   justify-center ">
        <div className=" rounded-full border-5 border-black bg-primary-100 p-8 ">
          {icon}
        </div>
      </div>

      <h4 className="font-bold flex">{title}</h4>
    </div>
  );
};

export default Benefit;
