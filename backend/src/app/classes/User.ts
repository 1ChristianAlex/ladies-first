import { IUser } from '../types/IUser';

export class User {
  constructor(private User: IUser) {}

  public Name() {
    return `${this.User.name} ${this.User.lastname}`;
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
    let { id, email, imagens, ...rest } = this.User;
    return {
      id,
      email,
      name: this.Name(),
      ...rest,
      password: 'Your pass hehe',
      profile_image: imagens
    };
  }
}
