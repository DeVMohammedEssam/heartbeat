const validator = require("validator");
const isEmpty = require("../custom_modules/isEmpty");
const validateAnalyzeInputs = data => {
  let errors = {};
  /*   data: {
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
} */
  data.age || (data.age = "");
  data.cp || (data.cp = "");
  data.trestbps || (data.trestbps = "");
  data.chol || (data.chol = "");
  data.fbs || (data.fbs = "");
  data.restecg || (data.restecg = "");
  data.thalach || (data.thalach = "");
  data.exang || (data.exang = "");
  data.oldpeak || (data.oldpeak = "");
  data.slope || (data.slope = "");
  data.ca || (data.ca = "");
  data.thal || (data.thal = "");
  console.log("Data is: ", data);
  //required fields
  for (let key in data) {
    if (key !== "sex") {
      if (isEmpty(data[key])) errors[key] = `${key} field is required`;
      else if (!validator.isNumeric(data[key]))
        errors[key] = `${key} field must be a numeric value eg. 2 1.5 ..etc `;
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
export default validateAnalyzeInputs;
