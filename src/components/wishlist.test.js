import React from 'react';
import {shallow} from 'enzyme';
import Wishlist from './wishlist';

describe('<Wishlist />', () => {
  it('Renders without crashing', () => {
      shallow(<Wishlist wishes={[{
          text:"Text",
          name:"Text",
          salePrice:"300",
          image:"imageurl.com",
          productUrl:"google.com"
        }]}/>);
  })
})