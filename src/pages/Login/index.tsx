import React from "react";
import { useNavigate } from "react-router-dom";
import { actionGetLogin } from "../../features/Login/slices";
import { setUser } from "../../helpers/user";
import Button from "../../components/Button";
import Input from "../../components/Inputs";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import IkoneLogo from "../../assets/ikone.png";
import "./_styles.scss";

interface IStatePageLogin {
  user: string;
  pass: string;
}

const PageLogin = () => {
  const dispatch = useAppDispatch();
  const { getLogin } = useAppSelector(state => state)
  const navegate = useNavigate();

  const initialState: IStatePageLogin = {
    user: "",
    pass: "",
  };

  const [state, setState] = React.useState(initialState);

  const handlerLogin = (ev: React.FormEvent<HTMLInputElement>) => {
    ev.preventDefault();
    dispatch(actionGetLogin(state));
  };

  const handlerChange = (ev: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = ev.currentTarget;
    setState({
      ...state,
      [name]: value
    })
  };

  React.useEffect(() => {
    if (getLogin.status === "") return;

    if (getLogin.status === "failed") {
      alert(getLogin.feedbackError);
    }

    if (getLogin.status === "success") {
      setUser(getLogin.user)
        .then(() => navegate("/servicos"))
        .catch(() => navegate("/"));
    }
  }, [getLogin]);

  return (
    <div className="page-login">
      <form className="form-login">
        <h1 className="text-center heading--md mb-10">Login</h1>
        <div className="form-login__inputs">
          <Input
            type="text"
            name="user"
            label="Nome"
            size="sm"
            placeholder=""
            onChange={handlerChange}
          />
          <Input
            type="password"
            name="pass"
            label="Senha"
            size="sm"
            placeholder=""
            onChange={handlerChange}
          />
        </div>
        <Button size="sm" variant="primary" onClick={handlerLogin} loading={getLogin.status === "loading"}>
          Entrar
        </Button>
      </form>
      <div className="page-login__footer">
        <p>desenvolvido por</p>
        <img src={IkoneLogo} alt="Logotipo da Ikone"/>
      </div>
    </div>
  );
};
export default PageLogin;
