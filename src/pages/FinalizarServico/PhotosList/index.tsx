import "./_styles.scss"

const PhotosList = ({ photos }) => {
  return (
    <div className="list-photos">
      {photos.map((src) => (
        <div className="list-photos__item">
          <img src={src} alt="" />
          <button className="btn btn--sm">excluir</button>
        </div>
      ))}
    </div>
  );
};

export default PhotosList
