/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from "react";
import useAppState from "../../context/useAppState";
import { PiXBold } from "react-icons/pi";

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
        <div className="mt-2 flex items-center justify-between">
          <div className="pl-2">Howdy!</div>
          <button
            className="cursor-pointer p-2 text-2xl"
            type="button"
            title="Close Menu"
            onClick={() => dispatch({ type: "setIsMenuOpen", payload: false })}
          >
            <PiXBold />
          </button>
        </div>
        <div>
          <label>
            Dark Mode?
            <input
              type="checkbox"
              checked={isDark}
              onChange={(e) => {
                dispatch({ type: "setIsDark", payload: e.target.checked });
              }}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
