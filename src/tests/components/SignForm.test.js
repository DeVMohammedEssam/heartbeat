import React from "react";
import { SignForm } from "../../components/SignForm";
import { shallow } from "enzyme";
//login form
test("should render sign in form when making sign prop equal in", () => {
  const wrapper = shallow(<SignForm sign="in" />);
  expect(wrapper).toMatchSnapshot();
});
test("should raise email is required error", () => {
  const wrapper = shallow(<SignForm sign="in" />);
  wrapper.setState({ data: { email: "" } });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors.email).toBe("email is required");
});
test("should raise email is invalid error", () => {
  const wrapper = shallow(<SignForm sign="in" />);
  wrapper.setState({ data: { email: "invalidEmail" } });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors.email).toBe("email is invalid");
});
test("should rasie password is required error", () => {
  const wrapper = shallow(<SignForm sign="in" />);
  wrapper.setState({ data: { password: "", email: "meemasfw@gmail.com" } });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors.password).toBe("password is required");
});
test("should raise no errors", () => {
  const wrapper = shallow(<SignForm sign="in" />);
  wrapper.setState({
    data: { password: "123456", email: "meemasfw@gmail.com" }
  });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors).toEqual({});
});

//register form
test("should render sign up form when making sign prop equal up", () => {
  const wrapper = shallow(<SignForm sign="up" />);
  expect(wrapper).toMatchSnapshot();
});

//required fields
test("should raise email is required error", () => {
  const wrapper = shallow(<SignForm sign="up" />);
  wrapper.setState({ data: { email: "" } });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors.email).toBe("email is required");
});

test("should rasie password is required error", () => {
  const wrapper = shallow(<SignForm sign="up" />);
  wrapper.setState({ data: { password: "", email: "meemasfw@gmail.com" } });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors.password).toBe("password is required");
});
test("should rasie password confirmation is required error", () => {
  const wrapper = shallow(<SignForm sign="up" />);
  wrapper.setState({ data: { password2: "" } });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors.password2).toBe("password confirmation is required");
});

//logics
test("should raise email is invalid error", () => {
  const wrapper = shallow(<SignForm sign="up" />);
  wrapper.setState({ data: { email: "invalidEmail" } });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors.email).toBe("email is invalid");
});

test("should raise password doesn't match confirmation error", () => {
  const wrapper = shallow(<SignForm sign="up" />);
  wrapper.setState({ data: { password: "123456", password2: "123457" } });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors.password2).toBe("password does not match confirmation");
});

//chritereas

/*   if (!validator.isLength(data.name, { min: 2, max: 30 }))
  errors.name = "name must be between 2 and 30 characters";
  */

test("should raise name must be between 2 and 30 characters error when name letters less than 2 ", () => {
  const wrapper = shallow(<SignForm sign="up" />);
  wrapper.setState({ data: { name: "a" } });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors.name).toBe("name must be between 2 and 30 characters");
});
test("should raise name must be between 2 and 30 characters error when name letters more than 30 ", () => {
  const wrapper = shallow(<SignForm sign="up" />);
  wrapper.setState({
    data: {
      name: "mohammed essam el deen mohammed" //31
    }
  });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors.name).toBe("name must be between 2 and 30 characters");
});
test("should raise no errors when letters number is 2 ", () => {
  const wrapper = shallow(<SignForm sign="up" />);
  wrapper.setState({
    data: {
      name: "mo"
    }
  });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors.name).toBe(undefined);
});
test("should raise no errors when letters number is 30 ", () => {
  const wrapper = shallow(<SignForm sign="up" />);
  wrapper.setState({
    data: {
      name: "mohammed essam el deen mohamme" // 30
    }
  });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors.name).toBe(undefined);
});
test("should raise no errors when name letters number between 2 and 30 letters", () => {
  const wrapper = shallow(<SignForm sign="up" />);
  wrapper.setState({
    data: {
      name: "mohammed essam" //14
    }
  });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors.name).toBe(undefined);
});
/*
  
if (!validator.isLength(data.password, { min: 6, max: 50 }))
  errors.password = "password must be between 6 and 50 characters"; */
test("should raise password must be between 6 and 50 characters error when password letters less than 6 ", () => {
  const wrapper = shallow(<SignForm sign="up" />);
  wrapper.setState({ data: { password: "12345" } });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors.password).toBe("password must be between 6 and 50 characters");
});
test("should raise password must be between 6 and 50 characters error when password letters more than 50 ", () => {
  const wrapper = shallow(<SignForm sign="up" />);
  let pass = "";
  for (let i = 0; i < 51; i++) {
    pass += "w";
  }
  wrapper.setState({
    data: {
      password: pass
    }
  });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors.password).toBe("password must be between 6 and 50 characters");
});
test("should raise no errors when password letters number is 6 ", () => {
  const wrapper = shallow(<SignForm sign="up" />);
  wrapper.setState({
    data: {
      password: "123456"
    }
  });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors.password).toBe(undefined);
});
test("should raise no errors when password letters number is 50 ", () => {
  const wrapper = shallow(<SignForm sign="up" />);
  let pass = "";
  for (let i = 0; i < 50; i++) {
    pass += "w";
  }
  wrapper.setState({
    data: {
      password: pass // 50
    }
  });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors.password).toBe(undefined);
});
test("should raise no errors when password letters number between 6 and 50 letters", () => {
  const wrapper = shallow(<SignForm sign="up" />);
  wrapper.setState({
    data: {
      password: "mohammed essam" //14
    }
  });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");
  expect(errors.password).toBe(undefined);
});
