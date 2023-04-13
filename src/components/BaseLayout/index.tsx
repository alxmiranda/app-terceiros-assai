interface IProps {
  children: any
}

const BaseLayout = ({ children }: IProps) => {
  return (
    <main className="container">
      <div className="row">
        <div className="col-12">{children}</div>
      </div>
    </main>
  );
};

 
export default BaseLayout