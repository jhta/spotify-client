import styled from 'styled-components';

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
`;

export default Link;
