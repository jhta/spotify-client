import Item from '../Item';
import UL from './style';
import { pure } from 'recompose';

const List = pure(({ tracks = [] }) => (
  <UL>
    {
      tracks.map((track, i) => <Item {...track} key={i} />)
    }
  </UL>
))

export default List;
