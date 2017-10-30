import { pure } from 'recompose';
import Anchor from '../ui/styled/Anchor';
import styled from 'styled-components';

const LItem = styled.li`
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

const TrackCover = styled.figure`
  margin: 0;
  margin-right: 2rem;
  transition: all 300ms ease;

  &:hover {
    transform: scale(1.1);
  }
`

const getArtistString = (artists = []) => artists
  .map(artist => artist.name)
  .join(', ');

const getImage = (images = []) => images ?
  images[1] && images[1].url
  :
  false;


const Item = ({ name, href, artists = [], album = {}}) => (
  <LItem>
    <TrackCover>
      <img src={getImage(album.images)} width={120} height={120} />
    </TrackCover>
    <div>
      <Anchor primary href={href}>{ name }</Anchor>
      <p>{ getArtistString(artists) }</p>
      <Anchor gray href={album.href}>{ album.name }</Anchor>
    </div>
  </LItem>
);

export default Item;
