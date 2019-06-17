import validator from "validator";
import isEmpty from "../custom_modules/isEmpty";
const validateLoginInputs = data => {
  let errors = {};
  !data.email && (data.email = "");
  !data.password && (data.password = "");

  //logics
  if (!validator.isEmail(data.email)) errors.email = "email is invalid";
  //required fields
  if (isEmpty(data.email)) errors.email = "email is required";
  if (isEmpty(data.password)) errors.password = "password is required";
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
export default validateLoginInputs;
