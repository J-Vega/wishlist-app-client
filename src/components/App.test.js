import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('<AddForm/>', () => {
  it('Renders without crashing', () => {
      shallow(<App />);
  })
})