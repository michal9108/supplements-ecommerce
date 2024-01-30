import React from 'react'


interface FeatureProps {
    img:string,
    name:string,
    text:string
}
export default function Feature({img, name, text}:FeatureProps) {


  return (
    <div className="grid gap-2 p-2 md:p-2 justify-items-center ">
    <img
      src={img}
      alt=""
      className="inline-block h-8"
    />
    <p className="text-xl font-semibold">{name}</p>
    <p className="text-sm text-[#636262]">
      {text}
    </p>
  </div>
  )
}
