export type TextAreaProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className: string;
};

export function TextArea({
  value,
  onChange,
  placeholder,
  className,
}: TextAreaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={className}
    />
  );
}
