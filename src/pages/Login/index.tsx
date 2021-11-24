import { FC } from "react";
import Login from "../../components/Login";
import LoginSide from "../../components/Login/LoginSide";

const LoginPage: FC = (): JSX.Element => {
  return (
    <>
      <LoginSide/>
      <Login />
    </>
  );
};

export default LoginPage;
