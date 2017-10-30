import styled from 'styled-components';

const Box = styled.div`
  background: rgba(255, 10, 10, 0.36);
  color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  transition: all 300ms ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 10, 10, 0.7);
  }
`;
 export default Box;
