import React from "react";
import { shallow } from "enzyme";
import { Analyze } from "../../components/Analyze";
/*

<input type="number" className="analyze__input custom-input " onChange={this.handleChange} placeholder="age" name="age" value={this.state.data.age} />
<select type="number" className="analyze__input custom-input " onChange={this.handleChange} placeholder="sex" name="sex" defaultValue={this.state.data.sex}>
<option value="male">male</option>
<option value="female">female</option>
</select>
<input type="number" className="analyze__input custom-input " onChange={this.handleChange} placeholder="cp" name="cp" value={this.state.data.cp} />
<input type="number" className="analyze__input custom-input " onChange={this.handleChange} placeholder="trestbps" name="trestbps" value={this.state.data.trestbps} />
<input type="number" className="analyze__input custom-input " onChange={this.handleChange} placeholder="chol" name="chol" value={this.state.data.chol} />
<input type="number" className="analyze__input custom-input " onChange={this.handleChange} placeholder="fbs" name="fbs" value={this.state.data.fbs} />
<input type="number" className="analyze__input custom-input " onChange={this.handleChange} placeholder="restecg" name="restecg" value={this.state.data.restecg} />
<input type="number" className="analyze__input custom-input " onChange={this.handleChange} placeholder="thalach" name="thalach" value={this.state.data.thalach} />
<input type="number" className="analyze__input custom-input " onChange={this.handleChange} placeholder="exang" name="exang" value={this.state.data.exang} />
<input type="number" className="analyze__input custom-input " onChange={this.handleChange} placeholder="oldpeak" name="oldpeak" value={this.state.data.oldpeak} />
<input type="number" className="analyze__input custom-input " onChange={this.handleChange} placeholder="slope" name="slope" value={this.state.data.slope} />
<input type="number" className="analyze__input custom-input " onChange={this.handleChange} placeholder="ca" name="ca" value={this.state.data.ca} />
<input type="number" className="analyze__input custom-input " onChange={this.handleChange} placeholder="thal" name="thal" value={this.state.data.thal} />
 
state = {
        analyzeClicked: false,
        data: {
            age: "",
            sex: "male",
            cp: "",
            trestbps: "",
            chol: "",
            fbs: "",
            restecg: "",
            thalach: "",
            exang: "",
            oldpeak: "",
            slope: "",
            ca: "",
            thal: ""
        }
    }


*/
test("should raise all data field required errors", () => {
  const wrapper = shallow(<Analyze />);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });

  const errors = wrapper.state("errors");
  const expectedErrors = {
    age: "age field is required",
    ca: "ca field is required",
    chol: "chol field is required",
    cp: "cp field is required",
    exang: "exang field is required",
    fbs: "fbs field is required",
    oldpeak: "oldpeak field is required",
    restecg: "restecg field is required",
    slope: "slope field is required",
    thal: "thal field is required",
    thalach: "thalach field is required",
    trestbps: "trestbps field is required"
  };
  expect(Object.keys(errors).length).toBeGreaterThan(0);
  expect(errors).toEqual(expectedErrors);
});

test("should raise must be a numeric value errors", () => {
  const wrapper = shallow(<Analyze />);

  const dataSubmitted = {
    age: "string vlaue",
    ca: "string vlaue",
    chol: "string vlaue",
    cp: "string vlaue",
    exang: "string vlaue",
    fbs: "string vlaue",
    oldpeak: "string vlaue",
    restecg: "string vlaue",
    slope: "string vlaue",
    thal: "string vlaue",
    thalach: "string vlaue",
    trestbps: "string vlaue"
  };
  const expectedErrors = {
    age: "age field must be a numeric value eg. 2 1.5 ..etc ",
    ca: "ca field must be a numeric value eg. 2 1.5 ..etc ",
    chol: "chol field must be a numeric value eg. 2 1.5 ..etc ",
    cp: "cp field must be a numeric value eg. 2 1.5 ..etc ",
    exang: "exang field must be a numeric value eg. 2 1.5 ..etc ",
    fbs: "fbs field must be a numeric value eg. 2 1.5 ..etc ",
    oldpeak: "oldpeak field must be a numeric value eg. 2 1.5 ..etc ",
    restecg: "restecg field must be a numeric value eg. 2 1.5 ..etc ",
    slope: "slope field must be a numeric value eg. 2 1.5 ..etc ",
    thal: "thal field must be a numeric value eg. 2 1.5 ..etc ",
    thalach: "thalach field must be a numeric value eg. 2 1.5 ..etc ",
    trestbps: "trestbps field must be a numeric value eg. 2 1.5 ..etc "
  };
  wrapper.setState({ data: { ...dataSubmitted } });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  const errors = wrapper.state("errors");

  expect(errors).toEqual(expectedErrors);
});
