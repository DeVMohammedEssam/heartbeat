import { shallow } from 'enzyme';
import React from 'react';
import BroadCast from '../../components/BroadCast';
test('should render BroadCast component correctly before submitting the form', () => {
	const wrapper = shallow(<BroadCast />);
	expect(wrapper).toMatchSnapshot();
});
test('should render BroadCast component correctly after submitting the form', () => {
	const wrapper = shallow(<BroadCast />);
	expect(wrapper.state('sendNowClicked')).toBe(false);
	/*     wrapper.simulate("submit", {
            preventDefault: () => { }
        })
         */
	expect(wrapper).toMatchSnapshot();
});
test('should change state of message on textarea change', () => {
	const wrapper = shallow(<BroadCast />);
	const value = 'a message to be broadcasted';
	wrapper.find('textarea').simulate('change', {
		target: { value }
	});
	expect(wrapper.state('broadcast')['message']).toBe(value);
});
/* test("should change send to on select box ", () => {
    const wrapper = shallow(<BroadCast />);
    const select = wrapper.find("select");
    let value = "doctor";
    select.simulate("change", {
        target: { value }
    })
    const state = wrapper.state("broadcast");
    expect(state.sendTo).toBe(value)
}) */
