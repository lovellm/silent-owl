interface TextAreaProps {
  value: string;
  title?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
  noResize?: boolean;
  rows?: number;
  placeholder?: string;
}

export default function TextArea({
  value,
  onChange,
  title,
  className,
  noResize,
  rows,
  placeholder,
}: TextAreaProps) {
  return (
    <textarea
      rows={rows}
      title={title}
      value={value}
      placeholder={placeholder}
      className={`ctrl-outline input-main ${noResize ? "resize-none" : "resize"} ${className || ""}`}
      onChange={onChange}
    />
  );
}
