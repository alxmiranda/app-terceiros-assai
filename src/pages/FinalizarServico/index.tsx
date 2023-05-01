// import { ImageCapture } from "image-capture";
import React, { useRef } from "react";
import "./_styles.scss";
import TakePhoto from "./TakePhoto";
import PhotosList from "./PhotosList";
import BaseLayout from "../../components/BaseLayout";
import Button from "../../components/Button";
import Comment from "./Comment";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { actionPostMediaPreventiva } from "../../features/Preventiva/FinalizarServico/SendPhotos/slices";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";

const FinalizarServico = () => {
  const [toggleTakePhoto, setToggleTakePhoto] = React.useState(true);
  const [photos, setPhotos] = React.useState<Array<any>>([]);
  const dispatch = useAppDispatch();
  const { postMediaPreventiva } = useAppSelector((state) => state);
  const { idServico } = useParams();
  console.log(useParams());
  const getBlobPhoto = (blob) => {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      var base64 = reader.result?.toString().split(",")[1];
      setPhotos([...photos, { src: URL.createObjectURL(blob), blob: base64 }]);
      setToggleTakePhoto(false);
    };
  };

  const getOtherPhoto = () => setToggleTakePhoto(true);

  const removePhoto = (indice: number) => {
    const copyPhotos = [...photos];
    copyPhotos.splice(indice, 1);
    setPhotos(copyPhotos);
  };

  const sendPhotos = () =>
    dispatch(actionPostMediaPreventiva({ id: idServico, photos }));

  return (
    <>
      {toggleTakePhoto && (
        <BaseLayout>
          <strong>Você pode tirar até 4 fotos para finalizar o serviço</strong>
        </BaseLayout>
      )}
      {toggleTakePhoto && <TakePhoto cb={getBlobPhoto} />}
      {!toggleTakePhoto && (
        <BaseLayout>
          {postMediaPreventiva.status !== "success" && (
            <>
              <PhotosList photos={photos} removePhoto={removePhoto} />
              <p className="paragraph paragraph--sm color-negative">
                <strong>{postMediaPreventiva.feedbackError}</strong>
              </p>
            </>
          )}
          {postMediaPreventiva.status === "success" && <Comment />}
          {postMediaPreventiva.status !== "success" && (
            <nav className="controlls">
              <Button
                size="sm"
                variant="secondary"
                onClick={getOtherPhoto}
                disabled={photos.length === 4}
              >
                Tirar uma nova foto
              </Button>

              <Button size="sm" variant="primary" onClick={sendPhotos}>
                Enviar fotos
              </Button>
            </nav>
          )}
        </BaseLayout>
      )}
    </>
  );
};

export default FinalizarServico;
