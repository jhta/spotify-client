import { compose, withState } from 'recompose';
import Loading from '../client/components/ui/Loading';

const enhance = compose(
  withState('isLoading', 'onLoading', false)
);

const Login = enhance(({ isLoading, onLoading }) => (
  <div>
    <h1> Spotify app </h1>
    {
      isLoading ?
        <Loading />
        :
      <a href="/auth" onClick={() => { onLoading(true) }}>login</a>
    }
      </div>
));

export default Login;


