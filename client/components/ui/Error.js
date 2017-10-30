import { pure } from 'recompose';

const ErrorBox = pure(({ message }) => <div>{ message }</div>);

export default ErrorBox;
