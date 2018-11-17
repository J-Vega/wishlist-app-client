import React from 'react';
import {shallow} from 'enzyme';
import searchResults from './searchresults';

describe('<searchResults/>', () => {
  it('Renders without crashing', () => {
      shallow(<searchResults />);
  })
})