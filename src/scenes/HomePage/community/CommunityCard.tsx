import { SocialImgType } from "@/shared/types";

export default function CommunityCard({ name, opinion, image }: SocialImgType) {
  const overlayStyles = `p-5 absolute z-60 flex
    h-[560px] w-[450px] flex-col items-center justify-center
     whitespace-normal bg-orange-500 text-center text-primary-100
    opacity-0 transition duration-500 hover:opacity-80  `;

  return (
    <li className="relative mx-1 inline-block h-[580px] w-[450px] ">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{opinion}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
}


