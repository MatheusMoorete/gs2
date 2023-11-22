//ESSES CARDS SÃO REUTILIZADO NA PAGINA HOME 
//AQUI É APENAS O STYLED COMPONENTS, DEIXEI EM UM COMPONENTE SEPARADO PARA NÃO POLUIR O OUTRO JSX

import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 60px 0;
  color: #e9ffc2;
`;

export const Card = styled.div`
  width: 250px;
`;

export const Cabecalho = styled.div`
  background-color: #F99417;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.322);
`;

export const Foto = styled.img`
  width: 90px;
  border-radius: 50%;
  position: relative;
  bottom: -50px;
  right: -80px;
`;

export const Rodape = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F5F5F5;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.274);
  border-radius: 0px 0px 10px 10px;
  padding-top: 90px;
  padding-bottom: 40px;
`;

export const RodapeH4 = styled.h4`
  color: #363062;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
`;

export const RodapeH5 = styled.h5`
  font-size: 18px;
  line-height: 22px;
  color: #4D4C7D;
  padding: 0 16px;
  display: flex;
  align-items: center; 
`;

export const LinkedInIcon = styled(FaLinkedin)`
  margin-left: 8px; 
`;
