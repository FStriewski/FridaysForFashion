import * as React from 'react';
import {Header} from './Header';

export class Page extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
