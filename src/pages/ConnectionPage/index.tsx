import { FC } from "react";
import Connect from "../../components/Connect";
import Header from "../../components/Header";

const ConnectionPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Connect />
    </>
  );
};

export default ConnectionPage;
