export type TextFieldProps = {
  //creating the type that will be executed by function "TextField"
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export function TextField({ value, onChange, placeholder }: TextFieldProps) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
