import { pure } from 'recompose';
import styled from 'styled-components';

const Box = styled.div`
  background: #ddd;
  color: black;
  background: #00467F;
  background: -webkit-linear-gradient(to right, #A5CC82, #00467F);
  background: linear-gradient(to right, #A5CC82, #00467F);
`;

const ErrorBox = pure(({ message }) => <Box>{ message }</Box>);

export default ErrorBox;
