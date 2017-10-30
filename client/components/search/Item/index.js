import { pure } from 'recompose';
import Anchor from '../ui/styled/Anchor';
import { LItem, TrackCover } from './style';

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
