export class User {
  id: string | undefined;
  username: string | undefined;
  password: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  token: string | undefined;
  age: string | undefined;

}
export interface IUser {
  id: string;
  username: string;
  firstName: string;
}
