export default class UserValidation {
  checkPasswordConfirmation = (pass, confirm) => {
    if (pass !== confirm) {
      return false;
    }
    return true;
  };
}
