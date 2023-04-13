import { Link as TagLink } from "react-router-dom";
import "./_styles.scss";
import { IButtonProps, ILinkProps } from "./types";

const Button = (props: IButtonProps) => {
  const { children, size = "md", variant = "primary" } = props
  return (
    <button className={`btn btn--${size} btn--${variant} ${props.loading && "loading"}`} {...props}>
      {children}
      {props.loading && <span className="btn__spiner"/>}
    </button>
  )
}

export const Link = (props: ILinkProps) => {
  const { children, size = "md", variant = "primary" } = props
  return (
    <TagLink className={`btn btn--${size} btn--${variant}`} {...props}>
      {children}
    </TagLink>
  )
}

export const ButtonGroup = (props: any) => {
  return (
    <div className={`button-group-wrapper ${props.flexContent}`}>
      {props.children}
    </div>
  )
}

export default Button;
