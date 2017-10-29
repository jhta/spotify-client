import React, { Component } from 'react';
import Router from 'next/router';
import { persitsSession, isLogged, getToken } from './auth';


export default function withAuth(BaseComponent) {
  class AuthComponent extends Component {
    static async getInitialProps({ req, res, query }) {
      let token = null;
      if (req.session) token = req.session.token;
      else if (query) token = query.access_token;
      return { token };
    }

    render() {
      return <BaseComponent {...this.props} isLogged />
    }
  }

  return AuthComponent;
}
