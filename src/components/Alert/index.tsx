import {
  BsExclamationCircleFill,
  BsFillCheckCircleFill,
  BsFillExclamationTriangleFill,
} from "react-icons/bs";

import "./_styles.scss";
import React from "react";

interface IProps {
  type: "success" | "error" | "warning";
  children: string;
  show: boolean;
}

const Alert = ({ type, children, show }: IProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const icons = {
    success: <BsFillCheckCircleFill />,
    error: <BsExclamationCircleFill />,
    warning: <BsFillExclamationTriangleFill />,
  };

  React.useEffect(() => {
    setIsOpen(show)
    setTimeout(() => {
      setIsOpen(false)
    }, 3000)
  }, [show]) 

  return (
    <div className={`alert alert--${type} ${isOpen ? "fade-in" : "fade-out"}`}>
      <div className="alert__icon">{icons.error}</div>
      <p className="paragraph paragraph--md color-white">{children}</p>
    </div>
  );
};

export default Alert;
