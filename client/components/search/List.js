import Item from './Item';
import ULList from '../ui/styled/List';
import { pure } from 'recompose';

const List = pure(({ tracks = [] }) => (
  <ULList>
    {
      tracks.map((track, i) => <Item {...track} key={i} />)
    }
  </ULList>
))

export default List;
