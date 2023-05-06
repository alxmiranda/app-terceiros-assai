import React from "react";
import "./_styles.scss";

type TOption = { value: string, children: string }
interface ISelectProps {
  options: Array<any>;
  size: string;
  name?: string;
  label?: string;
  disabled?: boolean;
  error?: string;
  value?: string;
  onChange?: (ev: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = (props: ISelectProps) => {
  return (
    <div className="select-wrapper">
      <label
        className={`label label--${props.size}`}
      >
        {props.label}
      </label>
      <select
        className={`select select-${props.size}`}
        disabled={props.disabled}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
      >
        {
          props.options && props.options.map((item: TOption) => (
            <option value={item.value}>{item.children}</option>
          ))
        }
      </select>
      {/* <span className={`select-span select-${props.size}`}>hint</span> */}
    </div>
  );
};

export default Select;
