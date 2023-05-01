import { useLocation } from "react-router-dom";
import { Link } from "../Button";
import "./_styles.scss";
interface IProps {
  children: any;
}

const BaseLayout = ({ children }: IProps) => {
  const {pathname} = useLocation()
  
  return (
    <main className="container base-layout">
      {pathname !== "servicos" && <header>
        <Link size="sm" variant="tertiary" to="/servicos">Voltar para serviços</Link>
      </header>}
      <section className="base-layout__content">
        <div className="row">
          <div className="col-12">{children}</div>
        </div>
      </section>
      {/* <nav className="base-layout__nav">

      </nav> */}
    </main>
  );
};

export default BaseLayout;
