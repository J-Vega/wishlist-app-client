import React from 'react';
import {shallow} from 'enzyme';
import infoSection from './info-section';

describe('<infoSection/>', () => {
  it('Renders without crashing', () => {
      shallow(<infoSection />);
  })
})