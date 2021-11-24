import { FC } from "react";
import Visualize from "../../components/Visualize";
import Header from "../../components/Header";

const VisualizePage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Visualize />
    </>
  );
};

export default VisualizePage;
