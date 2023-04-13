import React from "react";
import "./styles.scss";

interface IInputProps {
  type: string;
  placeholder?: string;
  size: string;
  label: string;
  disabled?: boolean;
  error?: string;
  name?: string;
  value?: string;
  id?: string;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = (props: IInputProps) => {
  return (
    <div className="input-wrapper">
      <label className={`label label--${props.size}`} htmlFor={props.label}>
        {props.label}
      </label>
      <input
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        className={`input input--${props.size} input--${props.error} paragraph`}
        id={props.label}
        disabled={props.disabled}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {/* <span>hint</span> */}
    </div>
  );
};
export default Input;