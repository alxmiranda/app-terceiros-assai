// import { ImageCapture } from "image-capture";
import React, { useRef } from "react";
import "./_styles.scss";
import TakePhoto from "./TakePhoto";
import PhotosList from "./PhotosList";
import BaseLayout from "../../components/BaseLayout";
import Button from "../../components/Button";
import Comment from "./Comment";

const FinalizarServico = () => {
  const [toggleTakePhoto, setToggleTakePhoto] = React.useState(true);
  const [photos, setPhotos] = React.useState<Array<string>>(["", ""]);

  const getBlobPhoto = (blob) => {
    setPhotos([...photos, URL.createObjectURL(blob)]);
    setToggleTakePhoto(false);
  };

  const getOtherPhoto = () => setToggleTakePhoto(true);

  const removePhoto = (indice: number) => {
    const copyPhotos = [...photos]
    copyPhotos.splice(indice, 1)
    setPhotos(copyPhotos)
  }

  const sendPhotos = () => null
  
  return (
    <>
      {/* {toggleTakePhoto && <TakePhoto cb={getBlobPhoto} />} */}
      {toggleTakePhoto && (
        <BaseLayout>
          <PhotosList photos={photos} removePhoto={removePhoto} />
          <Comment />
          <nav className="controlls">
            <Button
              size="sm"
              variant="secondary"
              onClick={getOtherPhoto}
              disabled={photos.length === 4}
            >
              Tirar uma nova foto
            </Button>

            <Button
              size="sm"
              variant="primary"
              onClick={getOtherPhoto}
            >
              Enviar fotos
            </Button>
          </nav>
        </BaseLayout>
      )}
    </>
  );
};

export default FinalizarServico;
