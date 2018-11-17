
import React from 'react';
import { shallow } from 'enzyme';
import searchForm from './searchForm';

describe('<searchForm/>', () => {
    it('Renders without crashing', () => {
        shallow(<searchForm />);
    })
})

it('Should not render search results initially', () => {
    const wrapper = shallow(<searchForm />);
    expect(wrapper.hasClass('search-results')).toEqual(false);
});