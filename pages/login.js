import { compose, withState } from 'recompose';
import Loading from '../client/components/ui/Loading';
import styled from 'styled-components';

const enhance = compose(
  withState('isLoading', 'onLoading', false)
);

const Layout = styled.div`
  background: #00467F;
  background: -webkit-radial-gradient(#1ED760, #004670);
  background: radial-gradient(#1ED760, #004670);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Link = styled.a`
  padding: 1rem 2rem;
  border: 4px solid white;
  color: white;
  text-decoration: none;
  min-width: 10em;
  text-align: center;
  font-weight: bold;
  transition: all 600ms ease-in-out;;

  &:hover {
    color: #007de1;
    border-color: #007de1;
    transform: scale(1.1);
  }
`
const Login = enhance(({ isLoading, onLoading }) => (
  <Layout>
    <img src="https://www.shareicon.net/download/2016/06/21/607432_spotify.ico" />
    {
      isLoading ?
        <Loading />
        :
      <Link href="/auth" onClick={() => { onLoading(true) }}>LOGIN NOW!</Link>
    }
      </Layout>
));

export default Login;
