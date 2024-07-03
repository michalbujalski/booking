import type { Gender } from "./Gender";

export type UserForm = {
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: Gender;
}