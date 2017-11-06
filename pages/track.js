import withAuth from '../utils/withAuth';
// components
import Anchor from '../client/components/ui/styled/Anchor';
// styled components
import Background from '../client/components/ui/styled/GradientBackground';
import ButtonLink from '../client/components/ui/styled/ButtonLink';
import { Content, Meta }from '../client/components/ui/styled/pages/Track';
import Layout from '../client/components/ui/styled/Layout';
// fetch
import { fetchTrack } from '../client/services/spotify';
// utils
import { getArtistString, getImage, getTime } from '../utils/formatTrack';


const Track = ({ id, name, song, error }) => {
  if (error || !song) return <div>Error</div>;

  const { album, href, duration_ms, artists } = song;

  return (
    <Background>
      <Layout>
        <Content>
          <figure>
            <img
              src={getImage(album.images)}
              width={300}
              height={300}
            />
          </figure>
          <Meta>
            <Anchor href={href} primary marginBottom >
              { getArtistString(artists) }
            </Anchor>
            <Anchor href={href}>{ name }</Anchor>
            <span>
              { getTime(duration_ms) }
            </span>
          </Meta>

        </Content>
      </Layout>
    </Background>
  );
}

Track.getInitialProps = async ({ query }) => {
  const { id, name } = query;
  try {
    const song = await fetchTrack(id);
    return { id, name, song };
  }  catch (e) {
    return { id, name, e };
  }
}

export default Track;
