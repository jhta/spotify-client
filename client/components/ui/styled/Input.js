import styled from 'styled-components';

const Input = styled.input`
  border-width: 0;
  box-sizing: border-box;
  background: rgba(6, 56, 85, 0.6);
  font-size: 2.5rem;
  padding: 1rem;
  color: white;
  width: 100%;
  min-width: 40rem;
  font-style: cursive;
  border-bottom: 4px solid transparent;
  margin-top: ${(props => props.mt ? '15rem': '0')};

  &:focus {
    outline: none;
    border-bottom: 4px solid white;
  }

  &::-webkit-input-placeholder {
    color: rgb(6, 56, 85);
    font-style: cursive;
  }
`

export default Input;
