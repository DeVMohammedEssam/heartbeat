import { shallow } from 'enzyme';
import React from 'react';
import HeartLoader from '../../../components/layout/HeartLoader';
test('should render hearbearloadr component correctly', () => {
	const wrapper = shallow(<HeartLoader />);
	expect(wrapper).toMatchSnapshot();
});
