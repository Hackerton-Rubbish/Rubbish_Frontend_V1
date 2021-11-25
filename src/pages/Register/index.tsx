import { FC } from "react";
import Register from "../../components/Register";
import RegisterSide from "../../components/Register/RegisterSide";

const RegisterPage: FC = (): JSX.Element => {
  return (
    <>
      <RegisterSide />
      <Register />
    </>
  );
};

export default RegisterPage;
