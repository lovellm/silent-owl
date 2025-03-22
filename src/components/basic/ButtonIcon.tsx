interface ButtonIconProps {
  children?: React.ReactNode;
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

/** a button intended to display an icon as its content */
export default function ButtonIcon({ children, title, onClick, className }: ButtonIconProps) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={
        "ctrl-outline btn-main cursor-pointer rounded-xl p-1 text-2xl focus:outline-2 active:outline-2 " +
        (className || "")
      }
    >
      {children}
    </button>
  );
}
