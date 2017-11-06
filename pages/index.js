import React, { Component } from 'react';
// components
import Bar from '../client/components/search/Bar';
import List from '../client/components/search/List';
import Loading from '../client/components/ui/Loading';
import ErrorBox from '../client/components/ui/Error';
// HOC's
import withAuth from '../utils/withAuth';
import withRedux from 'next-redux-wrapper';
// store builder
import makeStore from '../client/store';
// initial state/store
import initialStore from '../client/intialState';
// fetch action
import { searchTrack } from '../client/actions/search';
// styled components
import Layout from '../client/components/ui/styled/Layout';
import Background from '../client/components/ui/styled/GradientBackground';
import Content from '../client/components/ui/styled/pages/App';

const App = ({ token, onSubmit, isLoading, tracks, error }) => (
  <Background>
    <Layout>
      <Content>
        {
          error ?
            <ErrorBox message={error} />
            :
            null
        }
        <Bar mt={!tracks.length && !error} onSubmit={onSubmit} />
        {
          isLoading ?
            <Loading />
            :
            <List tracks={tracks}/>
        }
      </Content>
    </Layout>
  </Background>
);

const mapDispatchToProps = dispatch => ({
  onSubmit: track => dispatch(searchTrack(track))
});

const mapStateToProps = state => state;


export default withRedux(
  makeStore,
  mapStateToProps,
  mapDispatchToProps
)(withAuth(App));
