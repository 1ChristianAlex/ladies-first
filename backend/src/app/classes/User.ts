import { IUser } from '../types/IUser';

export class User {
  constructor(private User: IUser) {}

  public Name() {
    let [firstLetterName, ...restName] = this.User.name.replace(';', '').trimLeft();
    let name = `${firstLetterName.toUpperCase()}${restName.join('')}`;

    let [firstLetterLastname, ...restLastname] = this.User.lastname.replace(';', '').trimLeft();
    let lastName = `${firstLetterLastname.toUpperCase()}${restLastname.join('')}`;

    return `${name} ${lastName}`;
  }
  public FullInfo() {
    return {
      ...this.User,
      password: 'Secret haha'
    };
  }
  public CreatingDate() {
    let { create_at } = this.User;
    let date = new Date(create_at);
    return date;
  }
  public TokenInfo() {
    let { id, email, password } = this.User;
    return {
      id,
      email,
      name: this.Name(),
      password
    };
  }
  public SimpleInfo() {
    let { password, name, id, lastname, imagens, ...rest } = this.User;
    let simpleInfo = {
      id,
      name: this.Name(),
      ...rest,
      profile_image: imagens
    };
    return simpleInfo;
  }
}
