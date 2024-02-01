import React from "react";

import checkIcon from "../../../assets/checkIcon.png";

interface FeatureProps {
  name: string;
  text: string;
}
export default function Feature({ name, text }: FeatureProps) {
  return (
    <div className="grid gap-2 p-2 md:p-2 justify-items-center rounded-lg shadow-lg">
      <img src={checkIcon} alt="" className="inline-block h-8" />
      <span>
        <p className="text-md font-medium text-center">{name}</p>
      </span>
      <span>
        <p className="text-sm text-[#636262] text-center">{text}</p>
      </span>
    </div>
  );
}
