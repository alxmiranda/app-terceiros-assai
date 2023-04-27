import "./_styles.scss"
import { IPropsModal } from "./types";

const Modal = ({
  children,
  header,
  actions,
  size = "lg"
}: IPropsModal) => {
  return (
    <div className="modal">
      <div className={`modal__content ${size}`}>
        <header>{header}</header>
        <section>{children}</section>
        <nav>{actions}</nav>
      </div>
    </div>
  );
};

export default Modal;
