import { Link } from "react-router-dom";
import { BsCardList, BsCamera } from "react-icons/bs";
import Button from "../Button";
import "./_styles.scss";
import { logout } from "../../helpers/user";
interface IProps {
  children: any;
  noPadding?: boolean;
}

const BaseLayout = ({ children, noPadding = false }: IProps) => {
  return (
    <main className="base-layout">
      <header className="base-layout__header">
        <div className="container">
          <div className="avatar">
            <p className="paragraph paragraph--sm color-secondary">
              Ola, <strong>Nome do usuario | </strong>
            </p>
            <Button variant="tertiary" size="sm" onClick={logout}>
              sair
            </Button>
          </div>
        </div>
      </header>
      {noPadding ? (
        children
      ) : (
        <div className="container">
          <section className="base-layout__content">
            <div className="row">
              <div className="col-12">{children}</div>
            </div>
          </section>
        </div>
      )}
      {/* <nav className="base-layout__nav">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Link to="/">
                <BsCardList />
                <span>serviços</span>
              </Link>
            </div>
            <div className="col-6">
              <Link to="/">
                <BsCamera />
                <span>iniciar serviço</span>
              </Link>
            </div>
          </div>
        </div>
      </nav> */}
    </main>
  );
};

export default BaseLayout;
