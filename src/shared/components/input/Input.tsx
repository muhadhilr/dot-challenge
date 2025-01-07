import React, { ChangeEventHandler } from "react";

type Props = {
  placeholder?: string;
  id?: string;
  className?: string;
  type?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  name?: string;
  disabled?: boolean;
};

const Input = ({
  placeholder = "Type something",
  id,
  className = "",
  type = "text",
  onChange,
  value,
  name,
  disabled,
}: Props) => {
  return (
    <div>
      <label htmlFor={id} className="text-gray-600">
        {name}
      </label>
      <input
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg outline-none ${className}`}
        placeholder={placeholder}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
