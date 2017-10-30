import styled from 'styled-components';

const Link = styled.a`
  color: ${props => props.gray ? '#bbb' : 'white'};
  text-decoration: none;
  text-align: center;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  font-size: ${props => props.primary ? '2rem' : '1.5rem'};

  &:hover {
    text-decoration: underline;
  }


`;

export default Link;
