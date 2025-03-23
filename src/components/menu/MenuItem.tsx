interface MenuItemProps {
  children?: React.ReactNode;
  onClick?: () => void;
  divider?: boolean;
}

export default function MenuItem({ children, onClick, divider }: MenuItemProps) {
  let className = "px-2 text-left";
  if (divider) {
    className += " border-b border-pink-900";
  }

  if (typeof onClick === "function") {
    return (
      <button type="button" className={className + " cursor-pointer"} onClick={onClick}>
        {children}
      </button>
    );
  }
  return <div className={className}>{children}</div>;
}
