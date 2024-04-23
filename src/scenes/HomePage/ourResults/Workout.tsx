import { WorkoutType } from "@/shared/types";

export default function Workout({ name, description, image }: WorkoutType) {
  const overlayStyles = `p-5 absolute z-30 flex
    h-[380px] w-[450px] flex-col items-center justify-center
    primary-100space-normal bg-black text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[500px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
}
