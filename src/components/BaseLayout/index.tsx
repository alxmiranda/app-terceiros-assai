import "./_styles.scss";
interface IProps {
  children: any;
}

const BaseLayout = ({ children }: IProps) => {
  return (
    <main className="container base-layout">
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
