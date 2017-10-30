import React, { Component } from 'react';
import SearchBar from '../client/components/search/SearchBar';
import List from '../client/components/search/List';
import withAuth from '../utils/withAuth';
import withRedux from 'next-redux-wrapper';
import makeStore from '../client/store';
import initialStore from '../client/intialState';
import { searchTrack } from '../client/actions/search';
import Loading from '../client/components/ui/Loading';

const App = ({ token, onSubmit, isLoading, tracks }) => (
  <div>
    <div>logged with token: { token }</div>
    <SearchBar onSubmit={onSubmit} />
    {
      isLoading ?
        <Loading />
        :
        <List tracks={tracks}/>
    }
  </div>
);

App.getInitialProps = ({ store }) => {
  console.log(store);
}

const mapDispatchToProps = dispatch => ({
  onSubmit: track => dispatch(searchTrack(track))
});

const mapStateToProps = state => { console.info(state); return state };


export default withRedux(
  makeStore,
  mapStateToProps,
  mapDispatchToProps
)(withAuth(App));

