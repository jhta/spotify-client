import { pure } from 'recompose';
import Link from 'next/link';
import Anchor from '../../ui/styled/Anchor';
import { LItem, TrackCover } from './style';
import { getArtistString, getImage } from '../../../../utils/formatTrack';


const Item = pure(({ name, id, href, artists = [], album = {}}) => (
  <LItem>
    <TrackCover>
      <img src={getImage(album.images)} width={120} height={120} />
    </TrackCover>
    <div>
      <Link href={{ pathname: '/track', query: { name, id }}} passHref >
        <Anchor primary>{ name }</Anchor>
      </Link>
      <p>{ getArtistString(artists) }</p>
      <Anchor gray href={album.href}>{ album.name }</Anchor>
    </div>
  </LItem>
));

export default Item;
