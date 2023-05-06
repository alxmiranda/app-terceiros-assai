import React from "react";
import Button, { Link } from "../../../components/Button";
import { IResponseGetServicos } from "../../../features/Servicos/types";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import "./_styles.scss";
import { actionGetServicos } from "../../../features/Servicos/slices";

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
                <div>
                  <div className="mb-10">
                    <h2 className="heading heading--sm">
                      Equipamento: {tipoEquipamento.nome}
                    </h2>
                    <p className="paragraph paragraph--sm color-tertiary">
                      {tipoEquipamento.descricao}
                    </p>
                  </div>
                  <p className="paragraph paragraph--sm mb-10 color-secondary">
                    <strong>Assiduidade:</strong> {assiduidade}
                  </p>
                  <p className="paragraph paragraph--sm mb-10 color-secondary">
                    <strong>Status:</strong> {status}
                  </p>
                  <p className="paragraph paragraph--sm mb-10 color-secondary">
                    <strong>Tipo:</strong> {tipo}
                  </p>
                  <p className="paragraph paragraph--sm mb-10 color-secondary">
                    <strong>Programado em:</strong> {dataProgramada}
                  </p>
                  <p className="paragraph paragraph--sm mb-10 color-secondary">
                    <strong>Iniciado em:</strong> {dataInicio}
                  </p>
                  {dataFim && (
                    <p className="paragraph paragraph--sm color-secondary">
                      <strong>Finalizado em:</strong> {dataInicio}
                    </p>
                  )}
                </div>
              </header>
              <article>
                <div className="mb-10">
                  <p className="paragraph paragraph--sm color-secondary">
                    <strong>Observações:</strong> {observacoes}
                  </p>
                </div>
                <div className="mb-10">
                <p className="paragraph paragraph--sm color-secondary">
                    <strong>Local: </strong> {local.nome}
                  </p>
                </div>
              </article>
              <div className="footer">
                {status === "iniciada" && (
                  <div className="row mt-10">
                    <div className="col-6">
                      <Link
                        size="sm"
                        variant="secondary"
                        to={`/finalizar/capturar-qrcode/${tipo}/${id}`}
                      >
                        Finalizar Serviço
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          // <article className="list__item">
          //   <div className="container">
          //     <div className="row">
          //       <div className="info col-12">
          //         <p className={`paragraph--sm color-secondary`}>
          //           <strong>{status}</strong>
          //         </p>
          //         <p className="paragraph--sm color-secondary">
          //           <strong>Equipamento: </strong> {nome}
          //         </p>
          //         <p className="paragraph--sm color-secondary">{descricao}</p>
          //       </div>
          //     </div>
          //     {status === "iniciada" && (
          //       <div className="row mt-10">
          //         <div className="col-6">
          //           <Link
          //             size="sm"
          //             variant="secondary"
          //             to={`/finalizar/capturar-qrcode/${tipo}/${id}`}
          //           >
          //             Finalizar Serviço
          //           </Link>
          //         </div>
          //       </div>
          //     )}
          //   </div>
          // </article>
        )
      )}
    </div>
  );
};

export default ListServicos;
