import { StarIcon } from "@heroicons/react/24/solid";

export function StarIcons() {
  return (
    <div className="flex items-center my-4 text-yellow-300 ">
      <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
      <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
      <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
      <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
      <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
    </div>
  );
}
