import { pure } from 'recompose';
import Box from './style';

const ErrorBox = pure(({ message }) => <Box>{ message }</Box>);

export default ErrorBox;
