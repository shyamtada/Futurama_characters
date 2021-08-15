/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage';
import Characters from '../Characters';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - FuturamaCharacters" defaultTitle="FuturamaCharacters">
        <meta name="description" content="" />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Characters} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </AppWrapper>
  );
}
