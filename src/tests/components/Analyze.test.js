import { shallow } from "enzyme";
import React from "react";
import Analyze from "../../components/Analyze";
test("should render analyze page correctly before and after submition ", () => {
    const wrapper = shallow(<Analyze />);
    expect(wrapper.state("analyzeClicked")).toBe(false);
    expect(wrapper).toMatchSnapshot();
    //after clicking on submit button
    wrapper.find("form").simulate("submit", {
        preventDefault: () => { }
    })
    expect(wrapper.state("analyzeClicked")).toBe(true);
    expect(wrapper).toMatchSnapshot();


})