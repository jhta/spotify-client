import withAuth from '../utils/withAuth';
import Background from '../client/components/ui/styled/GradientBackground';
import ButtonLink from '../client/components/ui/styled/ButtonLink';
import Layout from '../client/components/ui/styled/Layout';
import styled from 'styled-components';
import { fetchTrack } from '../client/services/spotify';
import { getArtistString, getImage } from '../utils/formatTrack';
import Anchor from '../client/components/ui/styled/Anchor';

const Content = styled.section`
  padding: 2rem;
  background: rgba(0,0,0,0.5);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 720px) {
    padding: 2rem 0;
    max-width: 720px;
    flex-direction: row;
  }
`;

const Meta = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: left;

  span {
    margin-top: 1rem;
    color: #ddd;
  }
`;

const Track = ({ id, name, song, error }) => {
  if (error) return <div>Error</div>;

  const { album, href, duration_ms, artists } = song;
  const minutes = Math.floor(duration_ms / 60000);
  const seconds = parseInt((duration_ms - (60000 * minutes) ) / 1000);
  return (
    <Background>
      <Layout>
        <Content>
          <figure>
            <img src={getImage(album.images)} width={300} height={300} />
          </figure>
          <Meta>
            <Anchor href={href} primary marginBottom> { getArtistString(artists) }</Anchor>
            <Anchor href={href}>{name}</Anchor>
            <span>
              { `Duration: ${minutes}:${seconds}` }
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
