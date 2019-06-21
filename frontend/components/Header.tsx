import * as React from 'react';
import {Nav} from './Nav';

export const Header = () => (
  <div>
    <div className="bar">
      <a href="">Sick fits </a>
      <Nav/>
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);
