import React from 'react';
import { SignForm } from "../../components/SignForm";
import { shallow } from "enzyme";
test("should render sign in form when making sign prop equal in", () => {
    const wrapper = shallow(<SignForm sign="in" />);
    expect(wrapper).toMatchSnapshot();
})

test("should render sign up form when making sign prop equal up", () => {
    const wrapper = shallow(<SignForm sign="up" />);
    expect(wrapper).toMatchSnapshot();
})