import { compose, withState } from 'recompose';
import Loading from '../client/components/ui/Loading';
import styled from 'styled-components';
import Background from '../client/components/ui/styled/GradientBackground';
import ButtonLink from '../client/components/ui/styled/ButtonLink';
import Layout from '../client/components/ui/styled/Layout';


const enhance = compose(
  withState('isLoading', 'onLoading', false)
);

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  transform: translateY(-20%);
`;

const Login = enhance(({ isLoading, onLoading }) => (
  <Background>
    <Layout>
      <Content>
        <img src="https://www.shareicon.net/download/2016/06/21/607432_spotify.ico" />
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
