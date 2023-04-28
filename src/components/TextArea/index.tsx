import "./styles.scss";
interface ITextAreaProps {
  placeholder?: string;
  label: string;
  disabled?: boolean;
  error?: string;
  name?: string;
  value?: string;
  id?: string;
  size: string;
  children: any;
  onChange?: (ev: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (ev: React.ChangeEvent<HTMLTextAreaElement>) => void;
}


const TextArea = ({ children, label, size, onChange }: ITextAreaProps) => {
  return (
    <div className="input-wrapper">
      <label className={`label label--${size}`} htmlFor={label}>
        {label}
      </label>
      <textarea className="input" rows={5} onChange={onChange} id={label}>
        {children}
      </textarea>
    </div>
  );
};

export default TextArea;
