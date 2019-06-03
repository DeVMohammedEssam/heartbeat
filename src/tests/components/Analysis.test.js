import { shallow } from "enzyme";
import React from "react";
import Analysis from "../../components/Analysis.js"
test("should render analysis page correctly", () => {
    const wrapper = shallow(<Analysis />);
    expect(wrapper).toMatchSnapshot();

})