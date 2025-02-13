
type KeyProps = {
  className: string;
  value: string
};

export function Key({ value, className}: KeyProps) {
  return (
    <input
    value={value}
    disabled
      className={`bg-white p-3 appearance-none border text-center   cursor-pointer text-black rounded-md h-10 w-10 flex items-center justify-center font-semibold ${className}`}
      />
   
  );
}
