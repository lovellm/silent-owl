interface ToggleProps {
  checked?: boolean;
  onToggle?: (next: boolean) => void;
  dimInactive?: boolean;
}

export default function Toggle({ checked, onToggle, dimInactive }: ToggleProps) {
  return (
    <div className="relative inline-block cursor-pointer">
      <input
        type="checkbox"
        className="peer absolute h-0 w-0 opacity-0"
        checked={checked}
        onChange={() => {
          if (onToggle) {
            onToggle(!checked);
          }
        }}
      />
      <div className="relative flex h-4 w-8 items-center rounded-full bg-amber-200 outline-teal-300 peer-focus:outline-1 hover:bg-amber-500 dark:bg-amber-800 dark:outline-teal-600 dark:hover:bg-amber-600">
        <div
          className={
            "absolute left-0 inline-block h-4 w-4 rounded-full transition-transform" +
            (dimInactive && !checked
              ? " bg-neutral-300 dark:bg-neutral-600"
              : " bg-cyan-300 dark:bg-cyan-700") +
            (checked ? " translate-x-4" : "")
          }
        />
      </div>
    </div>
  );
}
