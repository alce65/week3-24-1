export type TUser = {
  name: string;
  age: number;
  greeting: () => void;
};

export interface IUser {
  name: string;
  age: number;
  greeting: () => void;
}
