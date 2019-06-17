const validator = require("validator");
const isEmpty = require("../custom_modules/isEmpty");
const validateRegisterInputs = data => {
  let errors = {};
  data.name || (data.name = "");
  data.email || (data.email = "");
  data.password || (data.password = "");
  data.password2 || (data.password2 = "");

  //chritereas
  if (!validator.isLength(data.name, { min: 2, max: 30 }))
    errors.name = "name must be between 2 and 30 characters";
  if (!validator.isLength(data.password, { min: 6, max: 50 }))
    errors.password = "password must be between 6 and 50 characters";
  //logics
  if (!validator.equals(data.password, data.password2))
    errors.password2 = "password does not match confirmation";
  if (!validator.isEmail(data.email)) errors.email = "email is invalid";
  //required fields
  if (isEmpty(data.name)) errors.name = "name is required";
  if (isEmpty(data.email)) errors.email = "email is required";
  if (isEmpty(data.password)) errors.password = "password is required";
  if (isEmpty(data.password2))
    errors.password2 = "password confirmation is required";
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
export default validateRegisterInputs;
