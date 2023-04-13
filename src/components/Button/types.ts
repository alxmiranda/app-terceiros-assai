export interface IButtonProps {
  size: string;
  children: any;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  onClick?: any;
  id?: string;
  loading?: boolean
}

export interface ILinkProps extends IButtonProps {
  to: string,
}