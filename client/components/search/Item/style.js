import styled from 'styled-components';

export const LItem = styled.li`
  padding: 1rem;
  width: 100%;
  border-bottom: 4px solid white;
  display: flex;

  &:last-child {
    border-bottom: 0px solid;
  }
  p {
    margin: 0;
    color: #bbb;
  }

`;

export const TrackCover = styled.figure`
  margin: 0;
  margin-right: 2rem;
  transition: all 300ms ease;

  &:hover {
    transform: scale(1.1);
  }
`
