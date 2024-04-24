import useMediaQuery  from "./useMediaQuery";

const useCardStyle = () => {
  const isBelowsxxScreens = useMediaQuery("(max-width: 325px)");
  const isBelowsxScreens = useMediaQuery("(max-width: 480px)");
  const isBelowSmallScreens = useMediaQuery("(max-width: 768px)");
  const isMediumScreens = useMediaQuery("(min-width: 768px) and (max-width: 1060px)");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const isAboveLargeScreens = useMediaQuery("(min-width: 1200px)");

  let cardStyle;

  if (isBelowsxxScreens) {
    cardStyle = { width: "7rem", height: "23rem", margin: "0.5rem" };
  } else if (isBelowsxScreens) {
    cardStyle = { width: "10rem", height: "25rem", margin: "0.5rem" };
  } else if (isBelowSmallScreens) {
    cardStyle = { width: "11rem", height: "26rem", margin: "0.5rem" };
  } else if (isMediumScreens) {
    cardStyle = { width: "16rem", height: "30rem", margin: "0.5rem" };
  } else if (isAboveMediumScreens) {
    cardStyle = { width: "17rem", height: "42rem", margin: "0.5rem" };
  } else if (isAboveLargeScreens) {
    cardStyle = { width: "20rem", height: "44rem", margin: "0.5rem" };
  }

  return {
    cardStyle,
    isBelowsxxScreens,
    isBelowsxScreens,
    isBelowSmallScreens,
    isMediumScreens,
    isAboveMediumScreens,
    isAboveLargeScreens
  };
};

export default useCardStyle;
