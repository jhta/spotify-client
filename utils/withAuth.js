import React, { Component } from 'react';
import Router from 'next/router';
import { persitsToken, isLogged } from './auth';


export default function withAuth(BaseComponent) {
  class AuthComponent extends Component {
    static async getInitialProps({ req, query }) {
      let token = '';
      if (req && req.session) token = req.session.token;
      return { token, query };
    }

    componentDidMount() {
      const { token } = this.props;
      if (!isLogged() && token) persitsToken(token);
    }

    render() {
      return <BaseComponent {...this.props} isLogged />
    }
  }

  return AuthComponent;
}
