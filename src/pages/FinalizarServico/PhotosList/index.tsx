import Button from "../../../components/Button";
import "./_styles.scss"

const PhotosList = ({ photos, removePhoto }) => {
  return (
    <div className="list-photos">
      <p className="paragraph paragraph--sm color-accent text-right">{photos.length}/4</p>
      {photos.map((src, indice) => (
        <div className="list-photos__item">
          <img src={src} alt="" />
          <Button size="sm" variant="danger" onClick={() => removePhoto(indice)}>excluir</Button>
        </div>
      ))}
    </div>
  );
};

export default PhotosList
