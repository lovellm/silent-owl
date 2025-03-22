/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from "react";
import useAppState from "../../context/useAppState";
import { PiXBold } from "react-icons/pi";
import ButtonIcon from "../basic/ButtonIcon";
import ToggleSwitch from "../basic/ToggleSwitch";

export default function Menu() {
  const [{ isMenuOpen, isDark }, dispatch] = useAppState();

  // close menu on escape key press
  useEffect(() => {
    const closeMenu = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch({ type: "setIsMenuOpen", payload: false });
      }
    };
    if (isMenuOpen) {
      window.addEventListener("keyup", closeMenu);
    }
    return () => {
      window.removeEventListener("keyup", closeMenu);
    };
  }, [isMenuOpen, dispatch]);

  // return nothing if not open
  if (!isMenuOpen) {
    return undefined;
  }

  return (
    <div
      className="animate-fade-in fixed top-0 right-0 bottom-0 left-0 bg-pink-950/70"
      onClick={() => {
        dispatch({ type: "setIsMenuOpen", payload: false });
      }}
    >
      <div
        className="bg-main animate-slide-left absolute top-0 right-0 flex h-dvh w-full flex-col border-x border-l md:w-80"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="mt-1 flex items-center justify-between">
          <div className="pl-2">Howdy!</div>
          <ButtonIcon
            className="mt-1 mr-2"
            title="Close Menu"
            onClick={() => dispatch({ type: "setIsMenuOpen", payload: false })}
          >
            <PiXBold />
          </ButtonIcon>
        </div>
        <div>
          <ToggleSwitch
            checked={isDark}
            onToggle={(next) => dispatch({ type: "setIsDark", payload: next })}
            leftText="Light Mode"
            rightText="Dark Mode"
          />
        </div>
      </div>
    </div>
  );
}
