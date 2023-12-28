import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
};

const ActionButton = ({ children }: Props) => {
  return (
    <AnchorLink
      //TO DO :hover bug
      className=" rounded-lg bg-secondary-500  px-20 py-3   text-white no-underline font-semibold text-xl"

      // onClick={}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
