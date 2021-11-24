import { FC } from "react";
import Challenge from "../../components/Challenge";
import Header from "../../components/Header";

const ChallengePage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Challenge />
    </>
  );
};

export default ChallengePage;
