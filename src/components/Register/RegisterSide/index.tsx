import { FC } from "react";
import * as S from './styles';
import SideImage from '../../../assets/image/SideImage.png';

const RegisterSide: FC = (): JSX.Element => {
  return (
    <S.SideBackground>
      <S.SideImage src={SideImage} />
    </S.SideBackground>
  );
};

export default RegisterSide;
