import React, { Component } from 'react';
import SearchBar from '../client/components/search/SearchBar';
import List from '../client/components/search/List';
import withAuth from '../utils/withAuth';

const App = ({ token }) => (
  <div> k
    <div>logged with token: { token }</div>
      <SearchBar />
      <List />
    </div>
);

export default withAuth(App);

