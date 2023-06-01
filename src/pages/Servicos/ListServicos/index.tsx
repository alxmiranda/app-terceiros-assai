import React from "react";
import { Link } from "../../../components/Button";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import "./_styles.scss";
import { actionGetServicos } from "../../../features/Servicos/slices";
import transformDate from "../../../helpers/transform-date";
import { BsThreeDots } from "react-icons/bs";

const ListServicos = () => {
  const dispatch = useAppDispatch();
  const { getServicos } = useAppSelector((state) => state);

  React.useEffect(() => {
    dispatch(actionGetServicos({ tipoServico: "preventiva" }));
  }, []);

  if (getServicos.status === "loading") {
    return (
      <p className={`paragraph--sm color-secondary`}>
        <strong>Carregando serviços...</strong>
      </p>
    );
  }

  if (getServicos.servicos.length === 0 && getServicos.status === "success") {
    return (
      <p className={`paragraph--sm color-secondary`}>
        <strong>Nenhum seriço encontrado</strong>
      </p>
    );
  }

  return (
    <div className="list-servicos">
      {getServicos.servicos.map(
        ({
          id,
          status,
          observacoes,
          assiduidade,
          dataProgramada,
          dataInicio,
          dataFim,
          tipo,
          local,
          equipamento: { tipoEquipamento },
        }) => (
          <div className="card-servico">
            <div className="card-servico__content">
              <header>
                <button className="btn-detail">
                  <BsThreeDots />
                </button>
                <div className="container-fluid mt-10">
                  <div className="row">
                    <div className="col-8">
                      <p className="paragraph paragraph--lg color-white">
                        {tipoEquipamento.nome}
                      </p>
                      <p className="paragraph paragraph--sm color-white">
                        {tipoEquipamento.descricao}
                      </p>
                    </div>
                    <div className="col-4 status">
                      <p className="paragraph paragraph--sm color-white">
                        {status}
                      </p>
                    </div>
                  </div>
                </div>
              </header>
              <article>
                <div className="container-fluid">
                  <div className="row mb-20">
                    <div className="col-4">
                      <div className="label">
                        <p className="paragraph">Assiduidade</p>
                        <p className="paragraph">{assiduidade}</p>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="label">
                        <p className="paragraph">Tipo</p>
                        <p className="paragraph">{tipo}</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-20">
                    <div className="col-4">
                      <div className="label">
                        <p className="paragraph">Prrogramado</p>
                        <p className="paragraph">
                          {transformDate(dataProgramada)}
                        </p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="label">
                        <p className="paragraph">Iniciado</p>
                        <p className="paragraph">{transformDate(dataInicio)}</p>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="label">
                        <p className="paragraph">Finalizado</p>
                        <p className="paragraph">{transformDate(dataFim)}</p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="label">
                        <p className="paragraph">Observações</p>
                        <p className="paragraph">{observacoes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              {status === "iniciada" && (
                <footer>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-6 action">
                        <Link
                          size="sm"
                          variant="secondary"
                          to={`/finalizar/capturar-qrcode/${tipo}/${id}`}
                        >
                          Finalizar Serviço
                        </Link>
                      </div>
                    </div>
                  </div>
                </footer>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ListServicos;
