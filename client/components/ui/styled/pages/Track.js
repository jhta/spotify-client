import styled from 'styled-components';

export const Content = styled.section`
  padding: 2rem;
  background: rgba(0,0,0,0.5);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 720px) {
    padding: 2rem 0;
    max-width: 720px;
    flex-direction: row;
  }
`;

export const Meta = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: left;

  span {
    margin-top: 1rem;
    color: #ddd;
  }
`;

