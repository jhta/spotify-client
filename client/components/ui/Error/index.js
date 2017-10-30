import { pure } from 'recompose';

const ErrorBox = pure(({ message }) => <Box>{ message }</Box>);

export default ErrorBox;
