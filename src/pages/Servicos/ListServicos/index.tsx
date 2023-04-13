interface IProps {
  data: Array<any>;
}

const ListServicos = ({ data }: IProps) => {
  return (
    <div>
      {data.map((item) => <div>ola</div>)}
    </div>
  );
};

export default ListServicos
