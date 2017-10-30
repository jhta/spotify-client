import styled from 'styled-components';

const Layout = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 720px;

  @media only screen and (min-width: 720px) {
    padding: 2rem 0;
    max-width: 720px;
  }
  @media only screen and (min-width: 1080px) {
    max-width: 1080px;
  }
`;

export default Layout;
