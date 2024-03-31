import { BenefitType } from "@/shared/types";
import checkIcon from "@/assets/checkIcon.png";

export default function BenefitsBox({ benefittitle, text }: BenefitType) {
  return (
    <div className="grid gap-2 p-2 md:p-2 justify-items-center rounded-lg shadow-lg">
      <img src={checkIcon} alt="" className="inline-block h-8 " />
      <span>
        <h4 className="text-md font-bold  text-center">{benefittitle}</h4>
      </span>
      <span>
        <p className="text-sm text-[#636262] text-center">{text}</p>
      </span>
    </div>
  );
}
