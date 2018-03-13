import { compose, withState } from 'recompose';
// components
import Loading from '../client/components/ui/Loading';
import Logo from '../client/components/ui/Logo';
// styled components
import Background from '../client/components/ui/styled/GradientBackground';
import ButtonLink from '../client/components/ui/styled/ButtonLink';
import Layout from '../client/components/ui/styled/Layout';
import Content from '../client/components/ui/styled/pages/Login';

const enhance = compose(
  withState('isLoading', 'onLoading', false)
);

const Login = enhance(({ isLoading, onLoading }) => (
  <Background>
    <Layout>
      <Content>
        <Logo />
        {
          isLoading ?
            <Loading />
            :
          <ButtonLink href="/auth" onClick={() => { onLoading(true) }}>
            LOGIN NOW!
          </ButtonLink>
        }
      </Content>
  </Layout>
  </Background>
));

export default Login;
