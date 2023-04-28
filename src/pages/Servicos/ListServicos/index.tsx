import Button, { Link } from "../../../components/Button";
import { IResponseGetServicos } from "../../../features/Servicos/types";
import "./_styles.scss";
interface IProps {
  data: Array<IResponseGetServicos>;
}

const ListServicos = ({ data }: IProps) => {
  return (
    <div className="list">
      {data.map(
        ({
          id,
          status,
          equipamento: {
            tipoEquipamento: { nome, descricao },
          },
        }) => (
          <article className="list__item">
            <div className="container">
              <div className="row">
                <div className="info col-12">
                  <p
                    className={`paragraph--sm color-secondary`}
                  >
                    <strong>{status}</strong>
                  </p>
                  <p className="paragraph--sm color-secondary">
                    <strong>Equipamento: </strong> {nome}
                  </p>
                  <p className="paragraph--sm color-secondary">{descricao}</p>
                </div>
              </div>
              {status === "iniciada" && (
                <div className="row mt-10">
                  <div className="col-6">
                    <Link size="sm" variant="secondary" to={`/finalizar-servico/${id}`}>
                      Finalziar Serviço
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </article>
        )
      )}
    </div>
  );
};

export default ListServicos;
