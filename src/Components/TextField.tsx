export type TextFieldProps = {
  //creating the type that will be executed by function "TextField"
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className: string;
};

export function TextField({
  value,
  onChange,
  placeholder,
  className,
}: TextFieldProps) {
  return (
    <input
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
