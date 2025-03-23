import { PiListBold } from "react-icons/pi";
import useAppState from "../../context/useAppState";
import ButtonIcon from "../basic/ButtonIcon";

export default function MenuButton() {
  const [{ isMenuOpen }, dispatch] = useAppState();
  return (
    <ButtonIcon
      title={(isMenuOpen ? "Close" : "Open") + " Menu"}
      className={"transition-transform " + (isMenuOpen ? "rotate-90" : "")}
      onClick={() => {
        dispatch({ type: "setIsMenuOpen", payload: !isMenuOpen });
      }}
    >
      <PiListBold />
    </ButtonIcon>
  );
}
