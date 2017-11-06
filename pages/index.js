import React, { Component } from 'react';
import SearchBar from '../client/components/search/SearchBar';
import List from '../client/components/search/List';
import withAuth from '../utils/withAuth';
import withRedux from 'next-redux-wrapper';
import makeStore from '../client/store';
import initialStore from '../client/intialState';
import { searchTrack } from '../client/actions/search';
import Loading from '../client/components/ui/Loading';
import ErrorBox from '../client/components/ui/Error';
import Layout from '../client/components/ui/styled/Layout';
import Background from '../client/components/ui/styled/GradientBackground';
import styled from 'styled-components';

const UIApp = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const App = ({ token, onSubmit, isLoading, tracks, error }) => (
  <Background>
    <Layout>
      <UIApp>
        {
          error ?
            <ErrorBox message={error}/>
            :
            null
        }
        <SearchBar mt={!tracks.length && !error} onSubmit={onSubmit} />
        {
          isLoading ?
            <Loading />
            :
            <List tracks={tracks}/>
        }
      </UIApp>
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
