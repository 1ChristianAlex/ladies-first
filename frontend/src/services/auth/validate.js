export class UserValidation {
  checkPasswordConfirmation = (pass, confirm) => {
    if (pass !== confirm) {
      return false;
    }
    return true;
  };
}
export default new UserValidation();
