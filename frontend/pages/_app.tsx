import * as React from 'react';


import App, { Container } from 'next/app';
import { Page } from '../components/Page';

export class MyApp extends App {
  render() {
    // Stuff in here is shared between pages, so e.g. for store
    const { Component } = this.props;
    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}
