const EMAIL_VALIDATION_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const PASSWORD_VALIDATION_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const checkValidData = (email, password, name, isSignInForm) => {
  const isEmailValid = EMAIL_VALIDATION_REGEX.test(email);
  const isPasswordValid = PASSWORD_VALIDATION_REGEX.test(password);
  const isNameValid = name.length > 2;

  console.log(isSignInForm);
  console.log(isNameValid);

  if (isSignInForm && !isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
