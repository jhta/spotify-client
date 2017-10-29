import React, { Component } from 'react';
import { persitsSession } from '../utils/authPersistense';
import withAuth from '../utils/withAuth';

const App = ({ token }) => <div>logged with token: { token }</div>;

export default withAuth(App);

