import React from "react";

interface InputProps {
  placeholder?: string;
  title: string;
  type: "text" | "password" | "Email" |"textarea";
  onChange?: () => void;
  reference?: React.MutableRefObject<HTMLInputElement | null>;
}

export function Inputbox({ placeholder, title, type, onChange, reference }: InputProps) {
  return (
    <div className="flex w-full justify-start flex-col gap-2">
      <div className=" font-subtitle text-subtitle text-Textprimary">
        {title}
      </div>
      <input
        ref={reference || undefined} // Ensure `undefined` is used if `reference` is not passed
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="text-black p-5 py-2 rounded outline  focus:ring focus:ring-primary focus:outline-none"
      />
    </div>
  );
}
