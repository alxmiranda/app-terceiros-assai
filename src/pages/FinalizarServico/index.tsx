// import { ImageCapture } from "image-capture";
import React, { useRef } from "react";
import "./_styles.scss";
import TakePhoto from "./TakePhoto";
import PhotosList from "./PhotosList";
import BaseLayout from "../../components/BaseLayout";

const FinalizarServico = () => {
  const [toggleTakePhoto, setToggleTakePhoto] = React.useState(true);
  const [photos, setPhotos] = React.useState<Array<string>>([]);

  const getBlobPhoto = (blob) => {
    setPhotos([...photos, URL.createObjectURL(blob)]);
    setToggleTakePhoto(false);
  };

  const getOtherPhoto = () => setToggleTakePhoto(true);

  const sendPhotos = () => null
  
  return (
    <>
      {toggleTakePhoto && <TakePhoto cb={getBlobPhoto} />}
      {!toggleTakePhoto && (
        <BaseLayout>
          <PhotosList photos={photos} />
          <nav className="controlls">
            <button
              className="btn btn--sm btn--secondary"
              onClick={getOtherPhoto}
            >
              Tirar uma nova foto
            </button>

            <button
              className="btn btn--sm btn--primary"
              onClick={getOtherPhoto}
            >
              Enviar fotos
            </button>
          </nav>
        </BaseLayout>
      )}
    </>
  );
};

export default FinalizarServico;
